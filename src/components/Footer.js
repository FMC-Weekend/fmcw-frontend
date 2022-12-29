import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import logo from './foo.png';
import temp from './foop.png';

function Footer() {

  return (
    <div className="footer-container">
      <footer>
        <div className="footer">
          <section>
            <img
              src="https://drive.google.com/uc?export=view&id=1fqWH1KoCSic6KfpfZl_yT2UZ5PGecRz_"
              className="image"></img>
          </section>
        </div>
      </footer>

      <section className="social-media">
        <div className="social-icons">
          <a
            className="social-icon-link facebook"
            href="https://www.facebook.com/fmcweekendiitbhu"
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer">
            <i className="fab fa-facebook" />
          </a>
          <a
            className="social-icon-link instagram"
            href="https://www.instagram.com/fmc_weekend/"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a
            className="social-icon-link youtube"
            href="https://www.youtube.com/channel/UCt4-7kmQaPEZzPLil4RNRCw"
            target="_blank"
            aria-label="Youtube"
            rel="noreferrer">
            <i className="fab fa-youtube" />
          </a>
          <a
            className="social-icon-link linkedin"
            href="https://in.linkedin.com/company/fmc-weekend-creative"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer">
            <i className="fab fa-linkedin" />
          </a> 
        </div>
      </section>
    </div>
  );
}

export default Footer;
