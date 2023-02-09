/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import UpArrow from '../../UpArrowFaq.svg';
import DownArrow from '../../downArrowFaq.svg';
import { Data } from './Data';
import Footer from '../../Footer';
import { Fade } from 'react-reveal';
import leftStar from '../../leftStar.png';
import rightStar from '../../rightStar.png';
import './FAQ.css';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 220vh;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  @media (max-width: 768px) {
    height: 320vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 5%;
  color: #fff;
  max-width: 1500px;
  width: 100vw;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;
const Heading = styled.div`
  position: relative;
  background: #fe6263;
  height: 30vh;
  left: 0px;
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

const Wrap = styled.div`
  background: #fff;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
  span {
    margin-right: 1.5rem;
  }
  @media (max-width: 400px) {
    h1 {
      font-weight: 400;
      font-size: 25px;
      line-height: 33px;
    }
  }
`;

const Dropdown = styled.div`
  background: #fff;
  color: black;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: left;
  margin: 15px;

  p {
    font-size: 20px;
    padding: 15px;
    font-family: Nunito Sans;
  }
`;

function Accordion() {
  const ref_container = useRef();
  useEffect(() => {
    const scrollDiv = document.getElementById('header').offsetTop;
    window.scrollTo({ top: scrollDiv - 200, behavior: 'smooth' });
  }, []);
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="HEADER" style={{ overflow: 'hidden' }} id="header" ref_container={useRef}>
      <Heading>
        <Fade right>
          {/* <img src='Group_7167.svg' /> */}
          <div>
            <img className="star1" alt="" src={leftStar}></img>
          </div>
          <div>
            <span className="heading">FAQ</span>
          </div>
          <div>
            <img className="star2" alt="" src={rightStar}></img>
          </div>
        </Fade>
      </Heading>
      <IconContext.Provider value={{ color: 'black', size: '47px' }}>
        <AccordionSection className="accordion">
          <Container>
            {Data.map((item, index) => (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <div>
                    <h1
                      style={{
                        padding: '15px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        color: 'black',
                        fontWeight: '500',
                        fontSize: '22px',
                        lineHeight: '44px'
                      }}>
                      {item.question}
                    </h1>
                  </div>
                  <Fade bottom>
                    <span style={{ fontFamily: 'Montserrat', fontStyle: 'normal' }}>
                      {clicked === index ? (
                        <img src={UpArrow} style={{ maxWidth: 'max-content' }} />
                      ) : (
                        <img style={{ maxWidth: 'max-content' }} src={DownArrow} />
                      )}
                    </span>
                  </Fade>
                </Wrap>
                <hr
                  style={{
                    color: 'black',
                    marginTop: '30px',
                    border: '0.25px solid #000000'
                  }}></hr>
                {clicked === index ? (
                  <Fade bottom>
                    <Dropdown>
                      <p
                        style={{
                          fontFamily: 'Montserrat',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '18px',
                          lineHeight: '145.9%'
                        }}>
                        {item.answer}
                      </p>
                    </Dropdown>
                  </Fade>
                ) : null}
              </>
            ))}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Accordion;
