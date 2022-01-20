import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './fmcfooter1.png';
import temp from './logo.png';

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="sub-footer">
          <p>
            CONTACT <span class="tab"></span> CONTACT
          </p>
        </div>
        <div className="footer">
          <section1>
            <img src={temp} className="powered" alt="logo" />
          </section1>
          <section5>
            <h3>PRESENTS</h3>
          </section5>
          <section>
            <img src="/fmc_logo.png" className="image" alt="FMC" />
          </section>
          <section2>
            <h2>POWERED BY</h2>
            <br></br>
            <br></br>
            <br></br>
            <h3>CO-POWERED BY</h3>
          </section2>
        </div>
      </footer>

      <section class="social-media">
        <div class="social-icons">
          <a
            class="social-icon-link facebook"
            href="https://www.facebook.com/fmcweekendiitbhu"
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer">
            <i class="fab fa-facebook" />
          </a>
          <a
            class="social-icon-link instagram"
            href="https://www.instagram.com/fmc_weekend/"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer">
            <i class="fab fa-instagram" />
          </a>
          <a
            class="social-icon-link youtube"
            href="https://www.youtube.com/channel/UCt4-7kmQaPEZzPLil4RNRCw"
            target="_blank"
            aria-label="Youtube"
            rel="noreferrer">
            <i class="fab fa-youtube" />
          </a>
          <a
            class="social-icon-link linkedin"
            href="https://in.linkedin.com/company/fmc-weekend-creative"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer">
            <i class="fab fa-linkedin" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
