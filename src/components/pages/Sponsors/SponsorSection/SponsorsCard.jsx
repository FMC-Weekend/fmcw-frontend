import React from 'react';
// import styled from 'styled-components';
import './Card1.css';
import Fade from 'react-reveal/Fade';

function SponsorCard(props) {
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
      <div id="sponsor-card" options={options}>
        {/* {console.log(props)} */}
        <h3 id="cardTitle">{props.title}</h3>
        <a href={props.link} target="_blank">
          <div className="cardImg">
            <img src={props.img} alt="" />
          </div>
        </a>
      </div>
    </Fade>
  );
}
SponsorCard.defaultProps = {
  img: 'https://wallpapercave.com/wp/wp2831956.png'
};
export default SponsorCard;
