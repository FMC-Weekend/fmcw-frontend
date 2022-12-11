import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import Image from './merchandise.png';
import sectionImage from '../../bg.png';
import Section from './Section/Section';
import Classes from './LandingPage.module.css';
import Footer from '../../Footer';
import { Button } from '../../Button';
import closeMobileMenu from '../../Navbar';
import Testimoials from './Testimonials/Testimonials';

function landingPage() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth > 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };

  return (
    <div className={Classes.landing_page}>
      {/* <h1> Landing Page</h1> */}

      <Banner imagePath={process.env.REACT_APP_AWS_S3_URI + '/Group_7139.svg'} />

      <div className={Classes.texture_bg}></div>
      <img
        src={process.env.REACT_APP_AWS_S3_URI + '/SECT_DIV_LINE.svg'}
        alt="line"
        className={Classes.line_sep}
      />
      <Section
        title="ABOUT US"
        imagePath={process.env.REACT_APP_AWS_S3_URI + '/clubs_2X.png'}
        buttonText="REGISTER"
        link="/authentication"
        className="about-img">
        <img
          src={process.env.REACT_APP_AWS_S3_URI + '/LINEE.svg'}
          alt="line"
          className={Classes.about_sep}
        />
        The long-awaited exemplary 8th edition of FMC Weekend is finally here! This time we not only
        bring to you a plethora of exciting events that will put your creative mettle to test, but
        also some awe-inspiring workshops by the notable and established names of the digital arts
        domain, all from the very comfort of your home. As we herald this journey, get ready to
        experience some of the most ecstatic moments of your lives as the passion for digital arts
        conjures within you.
      </Section>
      <img
        src={process.env.REACT_APP_AWS_S3_URI + '/SECT_DIV_LINE.svg'}
        alt="line"
        className={Classes.line_sep1}
      />
      <Section
        title="EVENTS"
        imagePath={process.env.REACT_APP_AWS_S3_URI + '/EVENTSS.png'}
        buttonText="SEE ALL EVENTS"
        link="/events">
        <img
          src={process.env.REACT_APP_AWS_S3_URI + '/LINEE.svg'}
          alt="line"
          className={Classes.event_sep}
        />
        The electrifying eighth edition of FMC Weekend brings to you an opportunity to compete with
        your contemporaries and establish your talent. Participate in events of creative writing,
        photography, cinematography, design and animation, discover your true potential and watch
        FMC Weekend truly transform into a celebration of excellence.
      </Section>
      <Testimoials />
      <Footer />
    </div>
  );
}

export default landingPage;
