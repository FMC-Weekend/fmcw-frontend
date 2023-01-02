import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { TiArrowUpOutline, TiArrowDownThick } from 'react-icons/ti';
import { Data } from './Data';
import Footer from '../../Footer';
import { Fade } from 'react-reveal';
// import './FAQ.css';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  @media (max-width: 768px) {
    height: 80vh;
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
  max-width: 1600px;
  width: 102vw;
  border: 3px solid #000000;
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
    position: relative;
    width: 30vw;
    height: 30vh;
    left: 35vw;
    top: 0vh;
  }
  @media (max-width: 768px) {
    // width: 100vw;
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
  h1 {
    padding: 15px;
    font-size: 20px;
    text-align: center;
    font-family: Marcellus;
  }
  span {
    margin-right: 1.5rem;
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
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="HEADER">
      
      <Heading>
      <Fade right>
        <img src='Group_7167.svg' />
        
      </Fade>
      </Heading>
      <IconContext.Provider value={{ color: 'black', size: '47px' }}>
        <AccordionSection className="accordion">
          <Container>
            {Data.map((item, index) => (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: '36px',
                      lineHeight: '44px'
                    }}>
                    {item.question}
                  </h1>
                  <span style={{ fontFamily: 'Montserrat', fontStyle: 'normal' }}>
                    {clicked === index ? <img src='Vector_58.svg' /> : <TiArrowDownThick />}
                  </span>
                </Wrap>
                <hr style={{ color: 'black', border: '0.25px solid #000000' }}></hr>
                {clicked === index ? (
                  <Fade bottom>
                  <Dropdown>
                    
                    <p
                      style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '24px',
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
