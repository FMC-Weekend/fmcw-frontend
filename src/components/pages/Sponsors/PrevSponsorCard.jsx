/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const CardTitle = styled.h3`
  transform: translateZ(55px);
`;

function PrevSponsorCard(props) {
  return (
    <div className="sponsor-card">
      <div>
        <div className="">
          <img src={props.img} alt="unicorn" className="sponsorcardImg" />
        </div>
        <CardTitle className="cardTitle">{props.name}</CardTitle>
      </div>

      <h3 className="position">{props.position}</h3>
    </div>
  );
}

export default PrevSponsorCard;
