import './Passes.css';
import { useCart } from 'react-use-cart';
// import EventCard from './Events/EventCard';
import { NavLink } from 'react-router-dom';
// import { Button } from '../components/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Footer from '../../Footer';
// import CheckoutButton from './CheckoutButton/CheckoutButton';
// import CartCard_2 from './CartCard_2';
import { useState, useEffect } from 'react';
// import Button from './pages/LandingPage/Section/Button/Button';
// import Button from './Button_2';
import leftStar from '../../leftStar.png';
import rightStar from '../../rightStar.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 5
};
function Pass(props) {
  return (
    <div>
      <section className="passes-page">
        <div className="pass-header">
          <img src={rightStar} className="headerImg"/>
          <div className="headerHeading">Passes</div>
          <img src={leftStar} className="headerImg"/>
        </div>
        <div className="passes-content">
          <h1>Know how you can get access to more events within your budget</h1>
          <p>
            Get ready to traverse the arena of digital arts with these exclusive passes that give
            you access to the grand 8th edition of FMC Weekend. We have a range of different passes
            including the super-combo called club passes which give you access to the complete
            package from any chosen category.
          </p>
        </div>
        <div className="pass-img">

          <img src={process.env.REACT_APP_AWS_S3_URI + '/Group_7256.svg'} alt=""/>
        </div>
        <div className="headingk"><img src="/images/yellowStar.svg" className="headingImg"/>OFFLINE<img src="/images/greenStar.svg" className="headingImg"/></div>
        
        <div className="pass-cards">
          <NavLink to="/events">
            {/*
             <img
               src={process.env.REACT_APP_AWS_S3_URI + '/event-pass.svg'}
               className="pass_card"
               
             /> 
            */}
            <img src="/images/offlineWorkshop.svg" className='pass_card'/>
          </NavLink>

          <NavLink to="/events">
            <img src="/images/offlineEvents.svg" className='pass_card'/>
          </NavLink>

        </div>
        
        <div className="headingk"><img src="/images/yellowStar.svg" className="headingImg"/>COMBOS<img src="/images/greenStar.svg" className="headingImg"/></div>
  
        <div className="pass-cards">
          <NavLink to="/events">
            <img src="/images/combo1.svg" className='pass_card'/>
          </NavLink>

          <NavLink to="/events">
            <img src="/images/combo2.svg" className='pass_card'/>
          </NavLink>

          <NavLink to="/events">
            <img src="/images/combo3.svg" className='pass_card'/>
          </NavLink>

          <NavLink to="/events">
            <img src="/images/combo4.svg" className='pass_card'/>
          </NavLink>

        </div>
        
        <div className="headingk"><img src="/images/yellowStar.svg" className="headingImg"/>ONLINE<img src="/images/greenStar.svg" className="headingImg"/></div>
        
        <div className="pass-cards">
          <NavLink to="/events">
            <img src="/images/online1.svg" className='pass_card'/>
          </NavLink>

          <NavLink to="/events">
            <img src="/images/online2.svg" className='pass_card'/>
          </NavLink>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Pass;
