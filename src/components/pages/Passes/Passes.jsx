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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4
};
function Pass(props) {
  return (
    <div>
      <section className="passes-page">
        <div className="pass-header">
          <img src={process.env.REACT_APP_AWS_S3_URI + '/passes-header.svg'} />
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
          <img src={process.env.REACT_APP_AWS_S3_URI + '/Group_7256.svg'} alt="" />
        </div>
        <div className="pass-cards">
          <NavLink to="/events">
            <img
              src={process.env.REACT_APP_AWS_S3_URI + '/event-pass.svg'}
              className="pass_card"
              alt=""
            />
          </NavLink>

          <NavLink to="/events">
            <img
              src={process.env.REACT_APP_AWS_S3_URI + '/Group7271.png'}
              className="pass_card"
              alt=""
            />
          </NavLink>
          <img
            src={process.env.REACT_APP_AWS_S3_URI + '/club-pass.svg'}
            className="pass_card"
            alt=""
          />
          <img
            src={process.env.REACT_APP_AWS_S3_URI + '/Group7267.png'}
            className="pass_card"
            alt=""
          />
          <img
            src={process.env.REACT_APP_AWS_S3_URI + '/Group7268.png'}
            className="pass_card"
            alt=""
          />
          <img
            src={process.env.REACT_APP_AWS_S3_URI + '/Group7269.png'}
            className="pass_card"
            alt=""
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Pass;
