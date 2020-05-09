import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
        <div className="container">
          <div className="block">
            <div>
              <Link to="/termandcond">Terms and Conditions</Link>
              
            </div>
            <div>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </div>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>Jacint</span></strong>
          </div>
        </div>
      </footer>
    );
}

export default Footer;