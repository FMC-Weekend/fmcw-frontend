/* eslint-disable react/react-in-jsx-scope */
// fmc 2022 site
import Classes from './Banner.module.css';
import Fade from 'react-reveal/Fade';

function Banner(props) {
  return (
    <Fade big duration={1000}>
      <div className={Classes.banner}>
        <link
          rel="preload"
          as="image"
          src={process.env.REACT_APP_AWS_S3_URI + '/HERO-WO-LOGO-011.svg'}
          className={Classes.image}
          alt="landing-page illustration"
        />
        <link
          rel="preload"
          as="image"
          src={process.env.REACT_APP_AWS_S3_URI + '/mobile-hero-section-02.svg'}
          className={Classes.mobile_hero}
          alt="landing-page illustration"
        />
        <link
          rel="preload"
          as="image"
          src={process.env.REACT_APP_AWS_S3_URI + '/Group_7139.svg'}
          className={Classes.logo_dates}
          alt="landing-page illustration"
        />
      </div>
    </Fade>
  );
}

export default Banner;
