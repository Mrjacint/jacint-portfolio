import React from 'react';
import profileImg from '../../assets/img/profile-img.jpg';

const About = (props) => {

    return(
        <section id="about" ref={props.about} className="about">
          <div className="container">

            <div className="section-title">
              <h2>About me</h2>
              <p></p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={profileImg} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Software Engineer &amp; Web Developer.</h3>
                <p className="font-italic">
                I describe myself as a coder who enjoys all aspects of software and web development. 
                A person who is always looking for new friends, challenges and problems to solve.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.jacint-udvarlaki.co.uk</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +44 8696 24801</li>
                      <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Surbiton, UK</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right"></i> <strong>Nationality:</strong> British, Hungarian</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> BSc (hons) 2.1</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Studied at:</strong> University of West London</li>
                    </ul>
                  </div>
                </div>
                <p></p>
              </div>
            </div>

          </div>
        </section>        
    );
}

export default About;