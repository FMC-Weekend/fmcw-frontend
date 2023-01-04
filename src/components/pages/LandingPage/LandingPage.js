import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import Image from './merchandise.png';
import sectionImage from '../../bg.png';
import Section from './Section/Section';
import Classes from './LandingPage.module.css';
import Footer from '../../Footer';
import { Button } from '../../Button';
import closeMobileMenu from '../../Navbar';
import side_img from './side_img.svg';
import winner1 from "./winner.svg";
import briefing from "./briefing.svg";
import redcarpet from "./red-carpet.svg";
import vector2 from "./vector2.svg"
import banner4 from "./banner4.svg"
import backButton from "./backButton.png"
import forwardButton from "./forwardButton.png";
import { Link } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
import Fade from 'react-reveal/Fade'
import Marquee from "react-fast-marquee";
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
    
    <>
      <div>
        
        <div className={Classes.div1}>
        <Fade bottom>
          <h1 className={Classes.div1_heading}>A FEST FOR xyz</h1>
          
          {/* <Link to="/authentication">  */}
          <a href='/authentication'>
            
          <button   className={Classes.register_button}><p>Register</p></button></a>
          {/* </Link> */}
          <img src={side_img} className={Classes.div1_img}/>
          </Fade>
        </div>

        <div className={Classes.div2}>
          <Fade right>
    <h1 >FOR CREATIVE ENTHUSIASTS</h1>
    <h2>FROM FIELDS OF</h2>
    <section className={Classes.button_1} >
    <button className={Classes.design} >   <p>Design</p></button>
    <button className={Classes.photography}><p>Photography</p></button>
    <button className={Classes.media}><p>Media</p></button>
    </section>
    <section className={Classes.button_2} >
    <button className={Classes.cine}><p>Cine</p></button>
    <button className={Classes.animation}><p>Animation</p></button>
    <button className={Classes.outreach}><p>Outreach</p></button>
    </section>
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
        <div className={Classes.div3}>
        <div className={Classes.banner1}>
        <img src={winner1}/>
        </div>
        <Fade bottom>
        <h1>COMPETITIONS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place>Explore</button>
        </Fade>
         </div>
       
        <div className={Classes.div4}>
        <div className={Classes.banner2}>
        <img src={briefing}/>
        </div>
        <Fade bottom>
        <h1>WORKSHOPS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place>Explore</button>
        </Fade>
        </div>
        <div className={Classes.div5}>
        <div className={Classes.banner3}>
        <img src={redcarpet}/>
        </div>
        <Fade bottom>
        <h1>PRONITES</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place>Explore</button>
        </Fade>
        </div>
        <div className={Classes.div6}>
        <div className={Classes.banner4}>
        <img src={banner4}/>
        </div>
        <Fade bottom>
        <h1>OPEN AIR THEATRES</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place>Explore</button>
        </Fade>
        </div>
        <div className={Classes.div7}>
          <Fade right>
<h1>75,269</h1>
<h2>Creative enthusiasts visiting the fest, building a culture and  community of digital art</h2>
</Fade>
        </div>
        
        </div>
        
        <div className={Classes.footer}>
        <Footer />
        </div>
        
    </>
    
  );
}

export default landingPage;
