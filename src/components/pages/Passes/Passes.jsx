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
import data from '../Events/Data/data';
import rightStar from '../../rightStar.png';
import PassCard from './PassCard';
import Accomodation from './Pass.svg';
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
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    sessionStorage.setItem('checked', !checked);
  };
  async function addItemToCart(item) {
    const userID = sessionStorage.getItem('userID');
    let obj = {
      userID: userID,
      cartItem: item
    };

    const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/cart', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.setTimeout(function () {
      location.reload();
    }, 1000);
    toast.warn('Event added to cart successfully!', {
      position: 'top-center',
      autoClose: 3000,
      draggable: true,
      icon: false
    });

    // post not working because status isn't upadated in data.js;

    //only for show purposed
    // window.location.href = "/register";
  }
  return (
    <div>
      <section className="passes-page">
        <div className="pass-header">
          <img src={rightStar} className="headerImg" />
          <div className="headerHeading">Passes</div>
          <img src={leftStar} className="headerImg" />
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
        <section className="accomodation">
          <div className="passes-content-2">
            <div>
            <h1>Do you want accommodation provided by us? </h1>
            <p>
              We will provide you our great hospitality including food at our college hostels along
              with our cool FMC Weekend ‘23 merchandise as a souvenir at minimal price of Rs.800.
              Stay and explore the fest with us and leave your minds in wonder.
            </p>
            </div>
            <img src={Accomodation}/>
          </div>
          <div className="check">
            <input
              type="checkbox"
              id="accodCheck"
              className="checkbox"
              name="check"
              autoComplete="off"
              onChange={handleChange}
            />
            <span>Yes, I'm interested</span>
          </div>
        </section>
        <div className="headingk">
          <img src="/images/yellowStar.svg" className="headingImg" />
          OFFLINE
          <img src="/images/greenStar.svg" className="headingImg" />
        </div>

        <div className="pass-cards">
          {/*
             <img
               src={process.env.REACT_APP_AWS_S3_URI + '/event-pass.svg'}
               className="pass_card"
               
             /> 
            */}
          {data.passesData.map((item, index) => {
            if (item.mode === 'Offline') {
              return (
                <PassCard
                  img1={item.img1}
                  img2={item.img2}
                  price1={item.price1}
                  price2={item.price2}
                  item={item}
                  key={index}
                />
              );
            }
          })}
        </div>

        <div className="headingk">
          <img src="/images/yellowStar.svg" className="headingImg" />
          COMBOS
          <img src="/images/greenStar.svg" className="headingImg" />
        </div>

        <div className="pass-cards">
          {data.passesData.map((item, index) => {
            if (item.mode === 'Combo') {
              return (
                <PassCard
                  img1={item.img1}
                  img2={item.img2}
                  price1={item.price1}
                  price2={item.price2}
                  item={item}
                  key={index}
                />
              );
            }
          })}
        </div>

        <div className="headingk">
          <img src="/images/yellowStar.svg" className="headingImg" />
          ONLINE
          <img src="/images/greenStar.svg" className="headingImg" />
        </div>

        <div className="pass-cards">
          {data.passesData.map((item, index) => {
            if (item.mode === 'Online') {
              return (
                <PassCard
                  img1={item.img1}
                  img2={item.img2}
                  price1={item.price1}
                  item={item}
                  key={index}
                />
              );
            }
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Pass;
