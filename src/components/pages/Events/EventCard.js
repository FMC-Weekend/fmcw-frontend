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
import rectangle from './Rectangle133.png';
import arrow from './Vector59.png';
// import frontImg from './Group7175.png';
import viewProbImg from './Vector.png';

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
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };
  return (
    <div
      className="card card-flip"
      style={{
        background: props.color,
        left: props.left,
        height: props.height,
        width: props.width,
        marginRight: props.marginRight
      }}>
      <div className="card-front card-div">
        <b className="type" style={{ left: props.frontLeft }}>
          {props.type}
        </b>
        <img className="front-arrow" src={arrow} style={{ display: props.display }}></img>
        <b className="front-title" style={{ left: props.frontLeft }}>
          {props.title}
        </b>
        <b className="prizes-front" style={{ left: props.frontLeft }}>
          Prizes Worth- {props.prize}
        </b>
        <b className="front-price" style={{ left: props.frontLeft }}>
          RS.{props.price}
        </b>
        <img className="front-img" src={props.img} style={{ left: props.frontLeft }}></img>
        <img className="three-dots1" src={rectangle} style={{ display: props.display }}></img>
        <img className="three-dots2" src={rectangle} style={{ display: props.display }}></img>
        <img className="three-dots3" src={rectangle} style={{ display: props.display }}></img>
      </div>

      <div className="card-back card-div">
        <div className="card-title" style={{ width: props.width }}>
          {props.title}
          <div className="lineTitle" style={{ left: props.lineLeft }}></div>
        </div>
        ;
        <div
          className="contents"
          style={{
            left: props.contentLeft,
            top: props.contentTop,
            width: props.contentWidth,
            fontSize: props.contentFont
          }}>
          <b>{props.content}</b>
        </div>
        <img className="viewProbImg" src={viewProbImg} style={{ left: props.imgLeft }}></img>
        <a
          href={props.link}
          target="_blank"
          className="btnView"
          rel="noreferrer"
          style={{ left: props.viewStatementLeft, fontSize: '1.2em' }}>
          {props.ps}
        </a>
        {sessionStorage.getItem('isLoggedIn') == 'true' ? (
          <div
            className="addToCart"
            style={{ background: props.color2, cursor: 'pointer' }}
            onClick={() => {
              // send post request to database

              addItemToCart(props.item);
              // addItem(props.item);

              // change();
            }}>
            {props.ps2}
          </div>
        ) : (
          <a
            className="addToCart"
            target="_blank"
            href="/authentication"
            rel="noreferrer"
            style={{ background: props.color2 }}
            >
            Login To Add
          </a>
        )}
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
  color: '#000',
  color2: '#2ED9FC'
};
export default EventCard;
