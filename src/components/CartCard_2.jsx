/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import './CartCard_2.css';
// import { Button } from '@mui/material';
// import unicorn from "./assets/test.png";
import styled from 'styled-components';
// import Tilt from 'react-tilt';
// import addToCart from './CartModal';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from 'react-use-cart';

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;


function CartCard_2(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
  const { addItem, inCart } = useCart();
  const { getItem } = useCart();
  const handleClick = () => {
    setClick(!click);
  };
  async function onDelete(mongooseId) {
    const userID = sessionStorage.getItem('userID');
    // e.preventDefault();
    let obj = {
      userID: userID,
      itemId: mongooseId
    };
    const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/cart', {
      method: 'DELETE',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    window.location.reload();
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
          <img className='front-arrow' src='Vector59.png'></img>
        <b className="front-title">{props.title}</b>
          <b className="prizes-front">Prizes Worth- {props.prize}</b>
          <b className='front-price'>RS.{props.price}</b>
          <img className='front-img' src='Group7175.png'></img>
          <img className='three-dots1' src='Rectangle133.png'></img>
          <img className='three-dots2' src='Rectangle133.png'></img>
          <img className='three-dots3' src='Rectangle133.png'></img>
      </div>

      <div className="card-back card-div">
      {!props.verified && (
          <button
            className="cart-btn"
            onClick={() => {
              onDelete(props.mongooseId);
              // change();
            }}>
            <CloseIcon />
          </button>
        )}
        <div className="card-title">
          {props.title}
          <div className="lineTitle"></div>
        </div>
        <div className="contents">
          <b>{props.content}</b>
        </div>
        <img className='viewProbImg' src='circle-arrow-right-solid.svg' alt='arrow' />
        <a href={props.link} target="_blank" className="btnView" rel="noreferrer">
          {props.ps}
        </a>
      </div>
    </div>
       
  );
}
CartCard_2.defaultProps = {
  type: 'Contest',
  title: 'That???s How B???roll',
  ps: '',
  price: 150,
};
export default CartCard_2;
