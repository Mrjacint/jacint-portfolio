import React, { useState } from 'react';
import profileImg from '../../assets/img/profile-img.jpg';

const Header = (props) => {
  const [buttonIconClass, setButtonIconClass] = useState('icofont-navigation-menu');

  let body = document.body;

  const bodyClickhandler = (event) => {
    body.removeEventListener('click',bodyClickhandler);
    body.classList.remove('mobile-nav-active');
    setButtonIconClass('icofont-navigation-menu');
    event.stopPropagation();
  }

  const mobileButtonHandler = (event) => {
    body.classList.add('mobile-nav-active');
    body.addEventListener('click', bodyClickhandler);
    setButtonIconClass('icofont-close');
  }

  return (
      <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={profileImg} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">Jacint Udvarlaki </a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://www.facebook.com/jacint.udvarlaki" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/jacintudvarlaki" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://github.com/Mrjacint" className="github"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/jacint-udvarlaki" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li className={(props.elmclass ==='home') ? "active" : ""}><a href="/"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li className={(props.elmclass ==='about') ? "active" : ""}><a href="/#about"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li className={(props.elmclass ==='resume') ? "active" : ""}><a href="/#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li className={(props.elmclass ==='portfolio') ? "active" : ""}><a href="/#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
            <li className={(props.elmclass ==='contact') ? "active" : ""}><a href="/#contact"><i className="bx bx-envelope"></i> Contact</a></li>
          </ul>
        </nav>
        <button onClick={mobileButtonHandler} type="button" className="mobile-nav-toggle d-xl-none">
          <i className={buttonIconClass}></i>
        </button>

      </div>
    </header>
  );
}

export default Header;