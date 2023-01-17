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
            <img src="LOGOFMC.png" className="image" alt="logo with image"></img>
          </section>
        </div>
      </footer>
      <div className="contact-section">
        <div className="contact-heading">CONTACT US</div>
        <div className="contact-form">
          <textarea
            type="name"
            className="contact-text"
            placeholder="Tell us about anything and everything"
            required
          />
          <input type="submit" value="Send" className="contact-submit-btn" />
        </div>
        <div className="contact-info">
          <div className="contact-details">
            <div>PUBLICITY HEAD 1</div>
            <div>9876543210</div>
          </div>
          <div className="contact-details">
            <div>PUBLICITY HEAD 2</div>
            <div>9876543210</div>
          </div>
        </div>
        <div className="social-media">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
