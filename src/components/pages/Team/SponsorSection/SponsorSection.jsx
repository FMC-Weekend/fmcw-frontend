import Card from './TeamCard';
import classes from './SponsorSection.module.css';
import data from '../TeamData';

function SponsorSection(props) {
  return (
    // <div style={{ backgroundColor: "#bbb", display: "flex", flexWrap: "wrap", marginLeft: "3vw" }}>
    <div className={classes.sponsor_section}>
      <div className={classes.mssg}>
        <h2>
          FMC Weekend’22 presents to you the core team members who along with their diligent team of
          sophomores, are making possible the conduction of this grand digital fiesta to enkindle
          the magic of creativity.
        </h2>
      </div>
      <div className={classes.sponsor_title} id="sponsor_1">
        <h1>Convenors</h1>

        <div className={classes.cards}>
          {data.convenorData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_2">
        <h1>General Secretary</h1>

        <div className={classes.cards}>
          {data.genSecData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_3">
        <h1>Content Team</h1>

        <div className={classes.cards}>
          {data.contentData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_4">
        <h1>Design Team</h1>

        <div className={classes.cards}>
          {data.designData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_5">
        <h1>Event Team</h1>

        <div className={classes.cards}>
          {data.eventData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>

      <div className={classes.sponsor_title} id="sponsor_6">
        <h1>Marketing Team</h1>

        <div className={classes.cards}>
          {data.marketingData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_7">
        <h1 id="sponsor_2">Publicity Team</h1>
        <div className={classes.cards}>
          {data.publiData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_8">
        <h1 id="sponsor_3">Public Relations Team</h1>
        <div className={classes.cards}>
          {data.prData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_9">
        <h1>Social Media Team</h1>
        <div className={classes.cards}>
          {data.socialMediaData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_10">
        <h1>Tech Team</h1>
        <div className={classes.cards}>
          {data.techData.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>

      <div className={classes.sponsor_title} id="sponsor_11">
        <h1>Club Secretaries</h1>

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
