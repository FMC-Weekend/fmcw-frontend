import React from 'react';
import Card from './SponsorSection/SponsorsCard.jsx';
import SponsorData from './SponsorData1.js';
import SponsorsData from './SponsorsData.js';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import leftStar from '../../leftStar.png';
import rightStar from '../../rightStar.png';
import Footer from '../../Footer';
import Classes from './Sponsors1.module.css';

const Heading = styled.div`
  position: relative;
  background: #685eda;
  height: 30vh;
  left: 0px;
  max-width: 1600px;
  width: 102vw;
  border: 3px solid #000000;
  display: flex;
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
    top: 30%;
  }
  span {
    top: 13%;
  }
  @media (max-width: 768px) {
    height: 15vh;
    span {
      font-size: 50px;
      text-shadow: 3px 4px 0px #000000;
    }
    img {
      max-width: 70px;
      top: 23%;
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
      {/* {console.log(SponsorData.name)} */}
      <div className="flex justify-center flex-col w-screen h-96">
        <h1 className="text-3xl font-bold text-center mt-3 mb-6">Title Sponsor</h1>
        <div className="lg:ml-96 lg:mr-96 sm:ml-10 sm:mr-10 flex justify-center">
          <img src="fujifilm.svg" alt="" className="text-center pt-6 pb-0 h-60" />
        </div>
      </div>
      {/* <hr className=" border border-black border-solid w-screen font-bold border-spacing-8" /> */}
      <div className=" border-solid border-2 mt-6 mb-1 w-screen border-black"></div>
      <div className="flex justify-center flex-col w-screen h-96">
        <h1 className="text-3xl font-bold text-center mt-3">Powered By</h1>
        <div className="lg:ml-96 lg:mr-96 sm:ml-10 sm:mr-10 flex justify-center">
          <img src="Kalakari.svg" alt="" className="text-center h-80 pt-6 pb-0" />
        </div>
      </div>
      <div className=" border-solid border-2 mt-6 w-screen border-black"></div>
      <div class="flex justify-center w-screen h-72">
        <div class="flex-1  border-r border-black">
          <h1 className="text-3xl font-bold text-center mt-3">Co-Powered By</h1>
          <div className="object-contain flex justify-center align-middle">
            <img src="Lapcare.svg" alt="" className="text-center p-10 h-64" />
          </div>
        </div>
        <div class=" flex-1  border-l border-black">
          <h1 className="text-3xl font-bold text-center mt-3">Co-Powered By</h1>
          <div className="object-contain flex justify-center align-middle">
            <img src="quillbot.svg" alt="" className="text-center p-10 h-56" />
          </div>
        </div>
      </div>
      <div className=" border-solid border-2 w-screen border-black"></div>
      <div className="flex w-screen flex-wrap justify-center p-4">
        {SponsorData.map((sponsor) => {
          return (
            <Card
              img={sponsor.img}
              title={sponsor.title}
            />
          );
        })}
      </div>
      <div className=" border-solid border-2 w-screen border-black"></div>
      <div className="flex w-screen flex-wrap justify-center p-4">
        <h1 className="text-3xl w-screen inline-block mb-6 font-bold text-center mt-3">
          Previous Sponsors
        </h1>
        {SponsorsData.map((sponsor) => {
          return <img src={sponsor.img} className={Classes.img} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors1;
