/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
// import Tilt from 'react-tilt';
// import addToCart from './CartModal';
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal';
import { useCart } from 'react-use-cart';

const CardTitle = styled.h2`
  transform: translateZ(55px);
`;

function WorkshopCard(props) {
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
          </div>
        </div>
        
      </Fade>
    </>
  );
}
WorkshopCard.defaultProps = {
  type: 'Workshop'
};
export default WorkshopCard;
