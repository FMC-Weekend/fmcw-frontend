/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  toLink,
  onClick,
  buttonStyle,
  buttonSize,
  isInternalLink,
  width,
  padding
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      {isInternalLink ? (
        <Link to={toLink} className="btn-mobile">
          <button
            style={{ width: width, paddingLeft: padding, paddingRight:padding }}
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
            {children}
          </button>
        </Link>
      ) : (
        <a href={toLink} className="btn-mobile">
          <button
            style={{ width: width }}
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
            {children}
          </button>
        </a>
      )}
    </>
  );
};