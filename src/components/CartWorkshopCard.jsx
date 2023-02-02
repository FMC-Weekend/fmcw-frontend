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
import Fade from 'react-reveal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useCart } from 'react-use-cart';

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;

function CartWorkshopCard(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
  const { addItem, inCart } = useCart();
  const { getItem } = useCart();
  const handleClick = () => {
    setClick(!click);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
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
    <>
      <Fade left>
        <div
          className="workshopCard"
          options={options}
          style={{
            background: props.color,
            marginLeft: props.margin,
            marginRight: props.margin,
            left: props.left
          }}>
          <div>
            <CardTitle className="positionWorkshopType">
              {props.price == 249 ? 'ONLINE' : 'OFFLINE'} {props.type}
            </CardTitle>
            <CardTitle className="positionWorkshopPrice">Rs.{props.price}</CardTitle>
            <div className="workshopCardImg">
              <img src={props.img} alt="" />
            </div>

            <CardTitle className="positionWorkshop">{props.title}</CardTitle>
            <CardTitle className="cardTitleWorkshop">by {props.name}</CardTitle>

            <br></br>
            <br></br>
            <br></br>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              type="submit"
              value="Remove"
              className="cart-remove-btn"
              onClick={() => {
                onDelete(props.mongooseId);
              }}>
              Delete
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="workshop-modal"
          style={{ background: props.color2 }}>
          <Box class={styled}>
            <Typography className="guest-details">
              <h2>{props.name}</h2>
              <div className="guest-profile">
                <img src={props.img} alt="guest-profile" className="workshop-modal-img" />
              </div>
              <br></br>
              <p className="workshop-desc">{props.desc}</p>

              {/*
  <a href={props.insta_id} className="" target="_blank" rel="noreferrer">
    Instagram
  </a> */}
              <div className="timing">
                <h3 className="dates">
                  Date: <span>{props.date}</span>
                </h3>
                <br></br>
                <h3 className="time">
                  Timings: <span>{props.time}</span>
                </h3>
                <br></br>
                <h3 style={{ bottom: '70px', fontSize: '1.5em' }}>Price: ₹ {props.price}</h3>
                {sessionStorage.getItem('isLoggedIn') == 'true' && (
                  <button
                    className="cart-btn w-cart"
                    style={{ background: props.color, border: `1px solid ${props.color}` }}
                    onClick={() => {
                      // send post request to database
                      addItemToCart(props.item);
                      // addItem(props.item);
                      // change();
                    }}>
                    Add
                  </button>
                )}
              </div>
            </Typography>
          </Box>
        </Modal>
      </Fade>
    </>
  );
}
CartWorkshopCard.defaultProps = {
  type: 'Workshop'
};
export default CartWorkshopCard;
