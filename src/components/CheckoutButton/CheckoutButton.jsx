/* eslint-disable react/prop-types */
import React from 'react';
import Classes from './CheckoutButton.module.css';

function Button(props) {
  return (
    <button className={Classes.button + ' ' + Classes.glow_button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
