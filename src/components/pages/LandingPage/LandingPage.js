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
          <h1 className={Classes.div1_heading}>A FEST FOR xyz</h1>
          {/* <Link to="/authentication">  */}
          <a href='/authentication'>
          <button   className={Classes.register_button}><p>Register</p></button></a>
          {/* </Link> */}
          <img src={side_img} className={Classes.div1_img}/>
        </div>
        <div className={Classes.div2}>
    <h1 >FOR CREATIVE ENTHUSIASTS</h1>
    <h2>FROM FIELDS OF</h2>
    <button className={Classes.design} >   <p>Design</p></button>
    <button className={Classes.photography}><p>Photography</p></button>
    <button className={Classes.media}><p>Media</p></button>
    <button className={Classes.cine}><p>Cine</p></button>
    <button className={Classes.animation}><p>Animation</p></button>
    <button className={Classes.outreach}><p>Outreach</p></button>
        </div>
        <div className={Classes.div3}>
        <div className={Classes.banner1}>
        <img src={winner1}/>
        </div>
        <h1>COMPETITIONS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place><p>Explore</p></button>
         </div>
       
        <div className={Classes.div4}>
        <div className={Classes.banner2}>
        <img src={briefing}/>
        </div>
        <h1>WORKSHOPS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place><p>Explore</p></button>
        </div>
        <div className={Classes.div5}>
        <div className={Classes.banner3}>
        <img src={redcarpet}/>
        </div>
        <h1>PRONITES</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place><p>Explore</p></button>
        </div>
        <div className={Classes.div6}>
        <div className={Classes.banner4}>
        <img src={banner4}/>
        </div>
        <h1>OPEN AIR THEATRES</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit. Egestas est lacus nullam dignissim semper. Tellus mauris sed ultricies nunc posuere non placerat </p>
       
        <button place><p>Explore</p></button>
        </div>
        <div className={Classes.div7}>
<h1>75269</h1>
<h2>Creative enthusiasts visiting the fest, building a culture and  community of digital art</h2>
        </div>
        <div className={Classes.div8}>
        <img className={Classes.back} src={backButton}/>
        <img src={vector2}/>
        <img className={Classes.forward} src={forwardButton}/>
        <h1>Shubham</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
        </div>
        
        </div>
        <div className={Classes.footer}>
        <Footer />
        </div>
        
    </>
    
  );
}

export default landingPage;
