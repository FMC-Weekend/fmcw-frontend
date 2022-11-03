import React from 'react';
import Tada from 'react-reveal/Tada';
import Wobble from 'react-reveal/Wobble';
import Card from './TeamCard';
import classes from './SponsorSection.module.css';
import data from '../TeamData';

function SponsorSection(props) {
  return (
    // <div style={{ backgroundColor: "#bbb", display: "flex", flexWrap: "wrap", marginLeft: "3vw" }}>
    <div
      style={{
        marginTop: '30px',
      }}
    >
      <div className={classes.mssg}>
      <Wobble right cascade>
        <h2 style={{marginLeft: '27px', marginRight:'42px'}}>
          FMC Weekend’22 presents to you the core team members who along with their diligent team of
          sophomores, are making possible the conduction of this grand digital fiesta to enkindle
          the magic of creativity.
          </h2>
          </Wobble>
      </div>
      <div className={classes.sponsor_title} id="sponsor_1">
      <div>
        <Tada right cascade>
        <h1>Convenors</h1>
        </Tada>
      </div>
        <div className={classes.cards}>
          {data.convenorData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_2">
      <div>
        <Tada right cascade>
        <h1>General Secretary</h1>
        </Tada>
      </div>

        <div className={classes.cards}>
          {data.genSecData.map((item, index) => (
                <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_3">
        <div>
          <Tada right cascade>
          <h1>Content Team</h1>
          </Tada>
        </div>

        <div className={classes.cards}>
          {data.contentData.map((item, index) => (
                <Card img={item.img} position={item.position} name={item.name} key={index} />
              ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_4">
        <div>
          <Tada right cascade>
          <h1>Design Team</h1>
          </Tada>
        </div>

        <div className={classes.cards}>
          {data.designData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_5">
        <div>
          <Tada right cascade>
          <h1>Event Team</h1>
          </Tada>
        </div>

        <div className={classes.cards}>
          {data.eventData.map((item, index) => (
                <Card img={item.img} position={item.position} name={item.name} key={index} />
              ))}
        </div>
      </div>

      <div className={classes.sponsor_title} id="sponsor_6">
        <div>
          <Tada right cascade>
          <h1>Marketing Team</h1>
          </Tada>
        </div>
        <div className={classes.cards}>
          {data.marketingData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_7">
      <div>
        <Tada right cascade>
        <h1 id="sponsor_2">Publicity Team</h1>
        </Tada>
      </div>
        <div className={classes.cards}>
          {data.publiData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_8">
      <div>
        <Tada right cascade>
        <h1 id="sponsor_3">Public Relations Team</h1>
        </Tada>
      </div>
        <div className={classes.cards}>
          {data.prData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_9">
      <div>
        <Tada right cascade>
        <h1>Social Media Team</h1>
        </Tada>
      </div>
        <div className={classes.cards}>
          {data.socialMediaData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_10">
      <div>
        <Tada right cascade>
        <h1>Tech Team</h1>
        </Tada>
      </div>
        <div className={classes.cards}>
          {data.techData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>

      <div className={classes.sponsor_title} id="sponsor_11">
      <div>
        <Tada right cascade>
        <h1>Club Secretaries</h1>
        </Tada>
      </div>

        <div className={classes.cards}>
          {data.secretariesData.map((item, index) => (
                <Card img={item.img} position={item.position} name={item.name} key={index} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
