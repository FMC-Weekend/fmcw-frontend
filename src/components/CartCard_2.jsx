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
    <div
      className="card card-flip"
      style={{
        background: props.color,
        left: props.left,
        height: '330px',
        width: props.width,
        marginRight: props.marginRight
      }}>
      <div className="card-front card-div">
        <b className="type" style={{ left: props.frontLeft }}>
          {props.type}
        </b>
        <b className="type2" style={{ left: props.frontLeft }}>
          online
        </b>
        <img className="front-arrow" alt="" src={process.env.REACT_APP_AWS_S3_URI + '/Vector59.png'}></img>
        <b className="front-title">{props.title}</b>
        <b className="prizes-front">{props.prize}</b>
        <b className="front-price">RS.{props.price}</b>
        <img className="front-img"  alt="" src={props.img}></img>
        <img
          className="three-dots1"
          src={process.env.REACT_APP_AWS_S3_URI + '/Rectangle133.png'}
          alt="" ></img>
        <img
          className="three-dots2"
          src={process.env.REACT_APP_AWS_S3_URI + '/Rectangle133.png'}
          alt="" ></img>
        <img
          className="three-dots3"
          src={process.env.REACT_APP_AWS_S3_URI + '/Rectangle133.png'}
          alt="" ></img>
      </div>

      <div className="card-back card-div">
        <div className="card-title" style={{ width: props.width }}>
          {props.title}
          <div className="lineTitle" style={{ left: props.lineLeft }}></div>
        </div>
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
        <img
          className="viewProbImg"
          src={process.env.REACT_APP_AWS_S3_URI + '/circle-arrow-right-solid.svg'}
          alt="arrow"
          style={{ left: props.imgLeft }}
        />
        <a
          href={props.link}
          target="_blank"
          className="btnView"
          rel="noreferrer"
          style={{ left: props.viewStatementLeft, fontSize: '1.2em' }}>
          {props.ps}
        </a>
        {!props.verified && (
          <button
            className="addToCart1"
            style={{ background: props.color2, cursor: 'pointer', fontFamily: 'Manrope' }}
            onClick={() => {
              onDelete(props.mongooseId);
            }}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
CartCard_2.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: 'View Problem Statement',
  price: 150
};
export default CartCard_2;
