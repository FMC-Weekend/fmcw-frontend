/* eslint-disable react/prop-types */
import React from 'react';
import Classes from './Button.module.css';

function Button(props) {
  return <button className={Classes.button + ' ' + Classes.glow_button}>{props.children}</button>;
}

export default Button;
