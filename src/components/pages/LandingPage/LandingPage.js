/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import Image from './merchandise.png';
import sectionImage from '../../bg.png';
import Section from './Section/Section';
import Classes from './LandingPage.module.css';
import Footer from '../../Footer';
import { Button } from '../../Button';
import closeMobileMenu from '../../Navbar';
import HeroAnimNew from './HeroAnimNew.gif';
import winner1 from './winner.svg';
import briefing from './briefing.svg';
import redcarpet from './red-carpet.svg';
import vector2 from './vector2.svg';
import banner4 from './banner4.svg';
import backButton from './backButton.png';
import forwardButton from './forwardButton.png';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials/Testimonials';
import Fade from 'react-reveal/Fade';
import Marquee from 'react-fast-marquee';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Typewriter from 'typewriter-effect';
import fmclogogroup from './fmclogogroup.svg';
import { margin } from '@mui/system';

function landingPage() {
  const [counterOn, setCounterOn] = useState(false);
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
    <>
      <div>
        <div className={Classes.div1}>
          <Fade bottom>
            <h1 className={Classes.div1_heading}>A Fest for </h1>
            <h1 className={Classes.div1_headanime}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings: ['Artists', 'Creators', 'Innovators']
                }}
              />
            </h1>
            {/* <Link to='/authentication'>  */}
            {/* <Link to="/authentication">  */}
            <a href="/authentication">
              <button className={Classes.register_button}>
                <p>Register</p>
              </button>
            </a>
            {/* </Link> */}
            <img src={HeroAnimNew} className={Classes.div1_img} />;
            {/* <img src="0001-0210.gif" className={Classes.div1_img} /> */}
          </Fade>
        </div>

        <div className={Classes.anim}>
          <Marquee gradient={false} speed={50}>
            <h2>FMC WEEKEND</h2>
            <h2>HUES IN HARMONY</h2>
            <h2>9TH EDITION</h2>
            <h2>IIT (BHU) VARANASI</h2>
            <h2>VISTA</h2>
          </Marquee>
        </div>
        <div className={Classes.div2}>
          <Fade right>
            <h1>FOR CREATIVE ENTHUSIASTS</h1>
            <h2>FROM FIELDS OF</h2>
            <section className={Classes.button_1}>
              <button className={Classes.design}>
                <p>Design</p>
              </button>
              <button className={Classes.photography}>
                <p>Photography</p>
              </button>
              <button className={Classes.media}>
                <p>Media</p>
              </button>
            </section>
            <section className={Classes.button_2}>
              <button className={Classes.cine}>
                <p>Cine</p>
              </button>
              <button className={Classes.animation}>
                <p>Animation</p>
              </button>
              <button className={Classes.outreach}>
                <p>Outreach</p>
              </button>
            </section>
          </Fade>
        </div>
        <div className={Classes.eventBox}>
          <div className={Classes.div3}>
            <div className={Classes.banner1}>
              <img src={winner1} />
            </div>
            <Fade bottom>
              <h1 className={Classes.events}>COMPETITIONS</h1>
              <p className={Classes.events}>
                Do you fancy yourself as a flawless reporter, or are you someone who can put all
                your imagination to produce artistic designs? Do you think that you can perfectly
                integrate the choice of lighting, lenses and special effects or is photography your
                thing? Then what are you waiting for? The ninth edition of FMC weekend brings to you
                an opportunity to compete in the largest digital arts festival in India and also get
                a chance to win exciting prizes!!{' '}
              </p>
              <a href="/events">
                <button place>Explore</button>
              </a>
            </Fade>
          </div>
          <div className={Classes.div4}>
            <div className={Classes.banner2}>
              <img src={briefing} />
            </div>
            <Fade bottom>
              <h1 className={Classes.events}>WORKSHOPS</h1>
              <p className={Classes.events}>
                The glorious ninth edition of FMC Weekend brings you an opportunity to learn & dive
                into the world of magical creativity and lively imagination. Attend the most
                insightful workshop on creative writing, photography, cinematography, design, and
                animation from the masters in the respective domain, and witness the transition from
                amateur to apprentice.{' '}
              </p>
              <a href="/events">
                <button place>Explore</button>
              </a>
            </Fade>
          </div>
        </div>
        {/* FOR DYNAMIC DIGITS ON SCROLLING */}
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className={Classes.eventBox}>
            <div className={Classes.div5}>
              <div className={Classes.banner3}>
                <img src={redcarpet} />
              </div>

              <Fade bottom>
                <h1 className={Classes.events}>PRONITES</h1>
                <p className={Classes.events}>
                  We present to you the most entertaining of nights, pronite! Where music meets the
                  romantic, jokes meet the humour-lover, and entertainment meets all! Hold on to
                  your seats as world-famous performers come to amuse you, and leave your minds in
                  wonder in your very own FMC Weekend’s Pronite!{' '}
                </p>

                <button place>Coming soon</button>
              </Fade>
            </div>
            <div className={Classes.div6}>
              <div className={Classes.banner4}>
                <img src={banner4} />
              </div>
              <Fade bottom>
                <h1 className={Classes.events}>OPEN AIR THEATRES</h1>
                <p className={Classes.events}>
                  Gone are the days when the cinema would be just confined to 4 walls.
                  Unconventional ways or Open-Air Theatres have made their way to us under the
                  stars, cool breezes, and an undefined sense of freedom. Bringing you a step closer
                  to these unconventional experiences, FMC Weekend presents to you a blockbuster
                  screening event beneath the night sky.{' '}
                </p>

                <button place>Coming soon</button>
              </Fade>
            </div>
          </div>
          <div className={Classes.div7}>
            <Fade right>
              <h1>{counterOn && <CountUp start={70000} end={75269} duration={2} delay={0} />}+</h1>;
              <h2>
                Creative enthusiasts visiting the fest, building a culture and community of digital
                art
              </h2>
            </Fade>
          </div>
        </ScrollTrigger>
      </div>
      {/* <Testimonials /> */}
      <div className={Classes.footer}>
        <Footer />
      </div>
    </>
  );
}

export default landingPage;
