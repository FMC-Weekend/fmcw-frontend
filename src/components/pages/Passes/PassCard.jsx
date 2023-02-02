import './Passes.css';
import { useCart } from 'react-use-cart';
import * as React from 'react';
import Box from '@mui/material/Box';
// import CheckoutButton from './CheckoutButton/CheckoutButton';
// import CartCard_2 from './CartCard_2';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal';

function PassCard(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

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

    // alert('Item added to cart successfully!');
    window.setTimeout(function () {
      location.reload();
    }, 1000);
    toast.warn('Pass added to cart successfully!', {
      position: 'top-center',
      autoClose: 3000,
      draggable: true,
      icon: false
    });

    // post not working because status isn't upadated in data.js;

    //only for show purposed
    // window.location.href = "/register";
  }
    const checkbox = document.getElementById('accodCheck');
    // if()
  return (
    <Fade left>
      <section className="pass-card">
        <img
          src={sessionStorage.getItem('checked') ? props.img1 : props.img2}
          className="pass_card"
        />

        <div
          className="pass-btn"
          style={{ cursor: 'pointer', fontFamily: 'Manrope' }}
          onClick={() => {
            addItemToCart(props.item);
          }}>
          Add to Cart
        </div>
      </section>
    </Fade>
    //   );
    // }
    // TeamCard.defaultProps = {
    // };
    // export default TeamCard;
  );
}
PassCard.defaultProps = {
  type: 'Pass'
};

export default PassCard;
