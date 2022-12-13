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
    <div className="card">
      <div className="card-div">
        <img
          src={props.img}
          alt="unicorn"
          className={props.type == 'Contest' ? 'card-img' : 'workshop-card-img'}
        />
        {props.type == 'Contest' ? <h3>₹ {props.price}</h3> : ''}
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
        <div className="separator">
          <div className="line" />
          <h2>{props.type}</h2>
          <div className="line" />
        </div>
        <CardTitle className="card-title">{props.title}</CardTitle>
        <h2 className="prizes">{props.type == 'Contest' ? 'PRIZES WORTH' : 'By'}</h2>
        <h2 style={{ fontSize: '1.2em' }}>{props.prize}</h2>
        <a href={props.link} target="_blank" className="btn1" rel="noreferrer">
          {props.ps}
        </a>
      </div>
    </div>
  );
}
CartCard_2.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: '',
  price: 150
};
export default CartCard_2;
