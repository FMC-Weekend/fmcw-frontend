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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const CardTitle = styled.h2`
  transform: translateZ(55px);
`;
const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4
};
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
    toast.warn('Workshop added to cart successfully!', {
      position: 'top-center',
      autoClose: 3000,
      draggable: true,
      icon: false
    });

    // post not working because status isn't upadated in data.js;

    //only for show purposed
    // window.location.href = "/register";
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };
  return (
    <div className="w-card">
      <div className="w-card-div">
        <div className="workshop-card-img-div">
          <img src={props.img} onClick={handleOpen} alt="unicorn" className="workshop-card-img" />
          {/* <h3>₹ {props.price}</h3> */}
        </div>

        <div className="separator">
          <div className="line" />
          <h2>{props.type}</h2>
          <div className="line" />
        </div>
        <CardTitle className="workshop-card-title">{props.title}</CardTitle>
        <h2 className="prizes">
          By <b>{props.prize}</b>
        </h2>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="workshop-modal">
        <Box class={style}>
          <Typography className="guest-details">
            <h2>{props.prize}</h2>
            <div className="guest-profile">
              <img src={props.img} alt="guest-profile" className="workshop-modal-img" />
            </div>
            <br></br>
            <p>{props.desc}</p>

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

              <h3 style={{ bottom: '70px', fontSize: '1.5em' }}>Price: ₹ {props.price}</h3>
              {sessionStorage.getItem('isLoggedIn') == 'true' && (
                <button
                  className="cart-btn w-cart"
                  onClick={() => {
                    // send post request to database

                    addItemToCart(props.item);
                    // addItem(props.item);

                    // change();
                  }}>
                  Add <img src={process.env.REACT_APP_AWS_S3_URI + '/add-cartPURPLE_OLD_1.svg'} alt="cart-icon" />
                </button>
              )}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
EventCard.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: 'View Problem Statement',
  price: 150
};
export default EventCard;
