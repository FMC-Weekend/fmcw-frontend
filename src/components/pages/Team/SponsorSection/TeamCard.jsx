import React from 'react';
import styled from 'styled-components';
import './Card.css';
import Fade from 'react-reveal/Fade'

const CardTitle = styled.h3`
  transform: translateZ(55px);
`;

function TeamCard(props) {
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };

  return (
    <Fade right>
    <div className="team-card" options={options}>
      <div>
        <div className="cardImg">
          <img src={props.img} alt="unicorn" className="cardImg" />
        </div>
        <CardTitle className="position">{props.position}</CardTitle>
      </div>
      <CardTitle className="cardTitle">{props.name}</CardTitle>
    </div>
    </Fade>
  );
}
TeamCard.defaultProps = {
  img: 'https://wallpapercave.com/wp/wp2831956.png'
};
export default TeamCard;
