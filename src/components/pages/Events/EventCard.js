/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import './events.css';
// import { Button } from '@mui/material';
// import unicorn from "./assets/test.png";
import styled from 'styled-components';
// import Tilt from 'react-tilt';
// import addToCart from './CartModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from 'react-use-cart';
import rectangle from './Rectangle133.png'
import arrow from './Vector59.png'
import frontImg from './Group7175.png'
import viewProbImg from './Vector.png'

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;

function EventCard(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
  const [buttonText, setButtonText] = useState('Next');
  const { addItem, inCart } = useCart();
  const { getItem } = useCart();
  const handleClick = () => {
    setClick(!click);
  };
  function change() {
    var elem = document.querySelector('.cart-btn');
    if (elem.value == 'Add') {
      elem.value = 'Added';
    } else {
      elem.value = 'Add';
    }
  }

  async function addItemToCart(item) {
    // console.log('yash');
    const userID = sessionStorage.getItem('userID');
    // e.preventDefault();
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
    // console.log({ obj });

    // alert('Item added to cart successfully!');/
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
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };
  return (
    <div className="card card-flip" style={{background: props.color}}>
      <div className="card-front card-div">
        <b className="type">{props.type}</b>
          <img className='front-arrow' src={arrow}></img>
        <b className="front-title">{props.title}</b>
          <b className="prizes-front">Prizes Worth- {props.prize}</b>
          <b className='front-price'>RS.{props.price}</b>
          <img className='front-img' src={frontImg}></img>
          <img className='three-dots1' src={rectangle}></img>
          <img className='three-dots2' src={rectangle}></img>
          <img className='three-dots3' src={rectangle}></img>
      </div>

      <div className="card-back card-div">
        {sessionStorage.getItem('isLoggedIn') == 'true' && (
          <button
            className="cart-btn"
            onClick={() => {
              // send post request to database

              addItemToCart(props.item);
              // addItem(props.item);

              // change();
            }}>
            {/* Add <img src={process.env.REACT_APP_AWS_S3_URI + '/add-cartPURPLE_OLD_1.svg'} /> */}
          </button>
        )}
        <div className="card-title">
          {props.title}
          <div className="lineTitle"></div>
        </div>
        <div className="contents">
          <b>{props.content}</b>
        </div>
        <img className='viewProbImg' src={viewProbImg}></img>
        <a href={props.link} target="_blank" className="btnView" rel="noreferrer">
          {props.ps}
        </a>
        <div className="addToCart" style={{background: props.color2}}>
          <a href={props.link} target="_blank" className="addToCartBtn" rel="noreferrer">
            {props.ps2}
          </a>
        </div>
      </div>
    </div>
  );
}
EventCard.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: 'View Problem Statement',
  ps2: 'Add To Cart',
  content: 150,
  color2: '#2ED9FC',
};
export default EventCard;
