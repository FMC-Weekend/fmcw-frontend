// import './Passes.css';
import { useCart } from 'react-use-cart';
import * as React from 'react';
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

    const checkbox = document.getElementById('accodCheck');
    // if()
  return (
    <Fade left>
      <section className="pass-card">
        <img
          src={sessionStorage.getItem('checked') ? props.img1 : props.img2}
          className="pass_card"
        />
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
