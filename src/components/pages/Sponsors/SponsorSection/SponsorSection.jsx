/* eslint-disable react/react-in-jsx-scope */
import Card from './Card';
import classes from './SponsorSection.module.css';

function SponsorSection(props) {
  return (
    // <div style={{ backgroundColor: "#bbb", display: "flex", flexWrap: "wrap", marginLeft: "3vw" }}>
    <div>
      {/* <h1>Sponsor 1</h1> */}
      <div className={classes.sponsor_title} id="sponsor_1">
        <div className={classes.cards}>
          <Card
            img={process.env.REACT_APP_AWS_S3_URI + '/LAPCARE_LOGO.png'}
            name="Lapcare"
            sponsor="Powered-by Sponsor"
            site="https://www.lapcare.com/"
          />
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_2">
        <div className={classes.cards}>
          <Card
            img={process.env.REACT_APP_AWS_S3_URI + '/Giottus-logo.png'}
            name="Giottus Technologies"
            sponsor="Crypto Trading Partner"
            site="https://giottus.com/"
          />
        </div>
      </div>

      <div className={classes.sponsor_title} id="sponsor_3">
        <div className={classes.cards}>
          <Card
            img={process.env.REACT_APP_AWS_S3_URI + '/Billionbooks-Official-Logo_(1).svg'}
            name="Billionbooks"
            sponsor="Book Reading Partner"
            site="https://thebillionbooks.store/"
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
