import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

import Input from '../Ui/Input/Input';
import Modal from '../Ui/Modal/Modal';

const MAP_URL = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_KEY}&q=Surbiton`;
const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY;
const API_PATH ='https://api.thehousefairy.net';

const Contact = (props) => {

  const [contactForm, setContactForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text'
      },
      label: {
        text: 'Your Name *'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      error: 'Please enter your name.'
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email'
      },
      label: {
        text: 'Your Email *'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      error: 'Please enter your email address.'
    },
    subject: {
      elementType: 'input',
      elementConfig: {
        type: 'text'
      },
      label: {
        text: 'Subject *'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      error: 'Please enter your subject.'
    },
    message: {
      elementType: 'textarea',
      elementConfig: {
        type: 'text',
        rows: '6'
      },
      label: {
        text: 'Message *'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      error: 'Please enter your message.'
    },
    termAndCond: {
      elementType: 'checkbox',
      elementConfig: {
        type: 'checkbox',
        checked: false
      },
      label: {
        text: 'Agree to terms and conditions *',
        class: 'form-check-label'
      },
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      error: 'You must agree before submitting.'
    },
    recaptcha: {
      value: null,
      valid: false
    }
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    msg: null
  });

  const mapStyle = {
    border: "0",
    width: "100%",
    height: "350px"
  }

  useEffect(() => {
    validateForm();
  });

  const recaptchaRef = useRef(null);

  const onChageHandler = (e, id) => {
    //console.log('value: '+e.target.value)
    //console.log(e.target)
    const updatedForm = { ...contactForm };
    // instance of one element of contacForm
    const updatedElement = { ...updatedForm[id] };
    //console.log(updatedElement)
    if (e.target.checked) {
      //console.log('checked insid if ' + e.target.checked)
      updatedElement.elementConfig.checked = true
      updatedElement.valid = validateInput(e.target.checked, updatedElement.validation);
    } else {
      updatedElement.elementConfig.checked = false
      updatedElement.value = e.target.value;
      updatedElement.valid = validateInput(e.target.value, updatedElement.validation);
    }
    setContactForm({ ...contactForm, [id]: updatedElement })
  }

  const validateForm = () => {
    const updatedForm = { ...contactForm };
    let isValid = true;
    for (let id in updatedForm) {
        isValid = updatedForm[id].valid && isValid
    }
    setFormIsValid(isValid);
  }

  const touchedHandler = (e, id) => {
    if (e) {
      const updatedForm = { ...contactForm };
      const updatedElement = { ...updatedForm[id] };
      updatedElement.touched = true;
      setContactForm({ ...contactForm, [id]: updatedElement })
    }
  }

  const validateInput = (value = null, rules) => {
    let isValid = true;
    //console.log(typeof value)

    if (rules.required && typeof value !== 'boolean') {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.required && typeof value === 'boolean') {
      isValid = value && isValid;
    }
    return isValid;
  }

  const onChange = (value) => {
    if (value) {
      setContactForm({...contactForm, recaptcha: {value: value, valid: true}})
      //setRecaptcha({...recaptcha, value, valid: true});
    }else{
      setContactForm({...contactForm, recaptcha: {value: value, valid: false}})
      //setRecaptcha({...recaptcha, value, valid: false});
    }
    
  }

  const handleFormSubmit = (event) => {
    //console.log(event);
    event.preventDefault();
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: {
            name: contactForm.name.value,
            email: contactForm.email.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value,
            recaptcha: contactForm.recaptcha.value
        }
    }).then(result => {
      setModal({
        show: true,
        msg: result.data
      })
      //console.log(result);
      clearForm();
    })
  }

  const clearForm = () => {
    let updatedForm = null;
    for (let key in contactForm) {
      let formEl = {...contactForm[key]};
      if (key === 'termAndCond') {
        formEl.valid = false;
        formEl.touched = false;
        formEl.elementConfig = {...formEl.elementConfig, checked: false}
      }
      else if (key === 'recaptcha') {
        formEl.valid = false;
        formEl.value = null;
      }
      else {
        formEl.value = '';
        formEl.valid = false;
        formEl.touched = false;
      }
      updatedForm = {...updatedForm, [key]:formEl}
    }
    setContactForm({...updatedForm});
    setFormIsValid(false);
    recaptchaRef.current.reset();
  }

  return (
    <section id="contact" ref={props.contact} className="contact">
      <Modal 
        show={modal.show}
        msg={modal.msg}
        modalClosed={() => setModal({show: false, msg: null})}
        title= 'Thank you to contact me!' />
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>Surbiton, London, Uk</p>
              </div>
              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+44 7869 624801</p>
              </div>
              <iframe
                title='google map'
                src={MAP_URL}
                style={mapStyle}
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="email-form" onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <Input
                    elementType={contactForm.name.elementType}
                    elementConfig={contactForm.name.elementConfig}
                    value={contactForm.name.value}
                    label={contactForm.name.label.text}
                    changed={(e) => onChageHandler(e, 'name')}
                    focused={(e) => touchedHandler(e, 'name')}
                    valid={contactForm.name.valid}
                    errortext={contactForm.name.error}
                    touched={contactForm.name.touched}
                  />
                  {/* <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" /> */}
                </div>
                <div className="form-group col-md-6">
                  {/* <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" /> */}
                  <Input
                    elementType={contactForm.email.elementType}
                    elementConfig={contactForm.email.elementConfig}
                    value={contactForm.email.value}
                    label={contactForm.email.label.text}
                    changed={(e) => onChageHandler(e, 'email')}
                    focused={(e) => touchedHandler(e, 'email')}
                    valid={contactForm.email.valid}
                    errortext={contactForm.email.error}
                    touched={contactForm.email.touched}
                  />
                </div>
              </div>
              <div className="form-group">
                {/* <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" /> */}
                <Input
                  elementType={contactForm.subject.elementType}
                  elementConfig={contactForm.subject.elementConfig}
                  value={contactForm.subject.value}
                  label={contactForm.subject.label.text}
                  changed={(e) => onChageHandler(e, 'subject')}
                  focused={(e) => touchedHandler(e, 'subject')}
                  valid={contactForm.subject.valid}
                  errortext={contactForm.subject.error}
                  touched={contactForm.subject.touched}
                />
              </div>
              <div className="form-group">
                {/* <textarea className="form-control" name="message" rows="6" data-rule="required" data-msg="Please write something for us"></textarea> */}
                <Input
                  elementType={contactForm.message.elementType}
                  elementConfig={contactForm.message.elementConfig}
                  value={contactForm.message.value}
                  label={contactForm.message.label.text}
                  changed={(e) => onChageHandler(e, 'message')}
                  focused={(e) => touchedHandler(e, 'message')}
                  valid={contactForm.message.valid}
                  errortext={contactForm.message.error}
                  touched={contactForm.message.touched}
                />
              </div>
              <div className="form-group text-center">
                <Input
                  elementType={contactForm.termAndCond.elementType}
                  elementConfig={contactForm.termAndCond.elementConfig}
                  value={contactForm.termAndCond.value}
                  label={contactForm.termAndCond.label.text}
                  labelclass={contactForm.termAndCond.label.class}
                  changed={(e) => onChageHandler(e, 'termAndCond')}
                  focused={(e) => touchedHandler(e, 'termAndCond')}
                  valid={contactForm.termAndCond.valid}
                  errortext={contactForm.termAndCond.error}
                  touched={contactForm.termAndCond.touched}
                />
              </div>
              <div className="d-flex justify-content-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_KEY}
                  onChange={onChange}
                  size= 'normal' />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" disabled={!formIsValid}>Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;