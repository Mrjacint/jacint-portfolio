import React,{ useEffect, useRef, Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Hero from '../Hero/Hero';
// import Facts from '../Facts/Facts';

const HomePage = (props) => {
  AOS.init();
  
  const aboutId = useRef();
  const resumeId = useRef();
  const portfolioId = useRef();
  const contactId = useRef();
  const prevPosition = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop < 200) {
        getPosition('home');
      }
      if (aboutId.current !== null && 
        resumeId.current !== null && 
        portfolioId.current !== null && 
        contactId.current !== null ) {
        if (scrollTop > (aboutId.current.offsetTop - 100) &&
        scrollTop < (resumeId.current.offsetTop - 100)) {
          getPosition('about');
        }else 
        if (scrollTop > (resumeId.current.offsetTop - 100) &&
        scrollTop < (portfolioId.current.offsetTop - 100)) {
          getPosition('resume');
        }else
        if (scrollTop > (portfolioId.current.offsetTop - 100) &&
        scrollTop < (contactId.current.offsetTop - 100)) {
          getPosition('portfolio');
        }else
        if (scrollTop > (contactId.current.offsetTop - 100)) {
          getPosition('contact');
        }
      }
    }
    const getPosition = (position) => {
      if (prevPosition.current !== position) {
        props.scrollTo({active: position});
      }
      prevPosition.current = position;
    }
    window.addEventListener('scroll', handleScroll);
  },[props]);



  return (
    <Fragment>
      <Hero />
      <About about={aboutId} />
      {/* <Facts /> */}
      <Skills />
      <Resume resume={resumeId} />
      <Portfolio portfolio={portfolioId} />
      <Contact contact={contactId} />
      <a href="/" data-aos="fade" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </Fragment>
  );
}

export default HomePage;