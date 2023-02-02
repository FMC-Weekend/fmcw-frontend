import React from 'react';
import Card from './SponsorSection/SponsorsCard.jsx';
import SponsorData from './SponsorData1.js';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import leftStar from '../../leftStar.png';
import rightStar from '../../rightStar.png';

const Heading = styled.div`
  background: #685eda;
  left: 0px;
  width: 102vw;
  border: 3px solid #000000;
  display: flex;
  flex: column;
  justify-content: center;
  h1 {
    padding: 15px;
    font-size: 60px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 128px;
    line-height: 156px;
    color: #ffffff;
    text-shadow: 4px 5px 0px #000000;
  }
  img {
    max-width: 84px;
    max-height: 80px;
    position: relative;
  }
  span {
  }
  @media (max-width: 1330px) {
    span {
      font-size: 50px;
      top: -10%;
      text-shadow: 3px 4px 0px #000000;
    }
    img {
      max-width: 70px;
      display: none;
    }
  }
`;

const Sponsors1 = () => {
  return (
    <div className="bg-white ">
      <div className="">
        <Heading>
          <Fade right>
            {/* <img src='Group_7167.svg' /> */}
            <div>
              <img className="star1" src={leftStar}></img>
            </div>
            <div>
              <span className="heading">Sponsors</span>
            </div>
            <div>
              <img className="star2" src={rightStar}></img>
            </div>
          </Fade>
        </Heading>
      </div>

      {/* 
      <div className="flex">
        {SponsorData.map((sponsor) => {
          {
            console.log(sponsor);
          }
          <Card img={sponsor.img} title={sponsor.title} name={sponsor.name} />;
        })}
      </div> */}
      {console.log(SponsorData.name)}
      <div className="flex justify-center flex-col w-screen">
        <h1 className="text-3xl font-bold text-center mt-3">Presents</h1>
        <div className="lg:ml-96 lg:mr-96 sm:ml-10 sm:mr-10 flex justify-center">
          <img
            src="https://drive.google.com/uc?export=view&id=1fsc_Fq1gE-eGUuDfPCbApWUxqs3Wqy6U"
            alt=""
            className="text-center pt-6 pb-0 w-64 "
          />
        </div>
      </div>
      {/* <hr className=" border border-black border-solid w-screen font-bold border-spacing-8" /> */}
      <div className=" border-solid border-2 mt-6 mb-1 w-screen border-black"></div>
      <div className="flex justify-center flex-col w-screen">
        <h1 className="text-3xl font-bold text-center mt-3">Powered By</h1>
        <div className="lg:ml-96 lg:mr-96 sm:ml-10 sm:mr-10 flex justify-center">
          <img
            src="https://drive.google.com/uc?export=view&id=1g24NVNEBcteGSJTCjQxU2q4rQW37ouWX"
            alt=""
            className="text-center w-64 pt-6 pb-0"
          />
        </div>
      </div>
      <div className=" border-solid border-2 mt-6 w-screen border-black"></div>
      <div class="flex justify-center w-screen">
        <div class="flex-1  border-r border-black">
          <h1 className="text-3xl font-bold text-center mt-3">Co-Powered By</h1>
          <div className="object-contain flex justify-center align-middle">
            <img
              src="https://drive.google.com/uc?export=view&id=1g24NVNEBcteGSJTCjQxU2q4rQW37ouWX"
              alt=""
              className="text-center p-10 w-72"
            />
          </div>
        </div>
        <div class=" flex-1  border-l border-black">
          <h1 className="text-3xl font-bold text-center mt-3">Co-Powered By</h1>
          <div className="object-contain flex justify-center align-middle">
            <img
              src="https://drive.google.com/uc?export=view&id=1g24NVNEBcteGSJTCjQxU2q4rQW37ouWX"
              alt=""
              className="text-center p-10 w-72"
            />
          </div>
        </div>
      </div>
      <div className=" border-solid border-2 w-screen border-black"></div>
      <div className="flex w-screen flex-wrap justify-center p-4">
        {SponsorData.map((sponsor) => {
          return (
            <Card
              className="bg-[#685eda] "
              img={sponsor.img}
              title={sponsor.title}
              name={sponsor.name}
            />
          );
        })}
      </div>
      <div className=" border-solid border-2 w-screen border-black"></div>
      <div className="flex w-screen flex-wrap justify-center p-4">
        <h1 className="text-3xl w-screen inline-block mb-6 font-bold text-center mt-3">
          Previous Sponsers
        </h1>
        {SponsorData.map((sponsor) => {
          return (
            <Card
              className="bg-[#685eda] "
              img={sponsor.img}
              title={sponsor.title}
              name={sponsor.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors1;
