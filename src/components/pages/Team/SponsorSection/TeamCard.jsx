import React from 'react';
import styled from 'styled-components';
import './Card.css';
import Fade from 'react-reveal/Fade';


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
          <div className="stars">
            <img src={process.env.REACT_APP_AWS_S3_URI + '/images/bi_stars.png'} alt="" />
          </div>

          <div className="drink">
            <img src={process.env.REACT_APP_AWS_S3_URI + '/images/drink.png'} alt="" />
          </div>

          <div className="cardImg">
            <img src={props.img} alt="" />
          </div>

          <h3 className="position">{props.position}</h3>
        </div>
        <h3 className="cardTitle">{props.name}</h3>
      </div>
    </Fade>
  );
}
TeamCard.defaultProps = {
  img: 'https://wallpapercave.com/wp/wp2831956.png'
};
export default TeamCard;
