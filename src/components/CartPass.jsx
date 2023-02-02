// import './Passes.css';
import { useCart } from 'react-use-cart';
import * as React from 'react';
import Box from '@mui/material/Box';
// import CheckoutButton from './CheckoutButton/CheckoutButton';
// import CartCard_2 from './CartCard_2';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal';

function CartPass(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const [click, setClick] = useState(false);
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
  const checkbox = document.getElementById('accodCheck');
  return (
    <Fade left>
      <section className="pass-card">
        <img src={localStorage.getItem('checked') ? props.img1 : props.img2} className="pass_card" />
        <br />
        <div
          className="cart-remove-btn"
          style={{ cursor: 'pointer', fontFamily: 'Manrope' }}
          onClick={() => {
            onDelete(props.mongooseId);
          }}>
          Delete
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
CartPass.defaultProps = {
  type: 'Pass'
};

export default CartPass;
