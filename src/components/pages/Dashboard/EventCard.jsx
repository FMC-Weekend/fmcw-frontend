/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import './Events.css';
// import { Button } from '@mui/material';
// import unicorn from "./assets/test.png";
import styled from 'styled-components';
// import Tilt from 'react-tilt';
import Classes from './Events.module.css';
// import addToCart from './CartModal';

import { useCart } from 'react-use-cart';

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;

function EventCard(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
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

  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };
  return (
    <div className={Classes.card}>
      <div className={Classes.card_div}>
        <img src={props.img} alt="unicorn" className={Classes.card_img} />
        {/* <h3>₹ {props.price}</h3> */}
        {/* <button
          className="cart-btn"
          onClick={() => {
            addItem(props.item);
            // change();
          }}
          disabled={inCart(props.item.id)}>
          {inCart(props.item.id) ? 'Added' : 'Add'}
          {inCart(props.item.id) ? '' : <img src="/add-cartPURPLE_OLD_1.svg" />}
        </button> */}
        <div className={Classes.separator}>
          <div className={Classes.line} />
          <span>{props.type}</span>
          <div className={Classes.line} />
        </div>
        <CardTitle className={Classes.card_title}>{props.title}</CardTitle>
        <h2 className={Classes.prizes}>
          PRIZES WORTH <br></br>
          <b>{props.prize}</b>
        </h2>
        <a href={props.link} target="_blank" className={Classes.btn1} rel="noreferrer">
          {props.ps}
        </a>
      </div>
    </div>
  );
}
EventCard.defaultProps = {
  type: '',
  title: 'That’s How B’roll',
  ps: 'View Problem Statement',
  price: 150
};
export default EventCard;
