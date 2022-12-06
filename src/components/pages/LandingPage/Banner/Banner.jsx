/* eslint-disable react/react-in-jsx-scope */
import Classes from './Banner.module.css';
import Fade from 'react-reveal/Fade'

function Banner(props) {
  return (
    <Fade big duration={1000}>
    <div className={Classes.banner}>
      <img src="/HERO-WO-LOGO-011.svg" className={Classes.image} />
      <img src="/mobile-hero-section-02.svg" className={Classes.mobile_hero} />
      <img src="/Group_7139.svg" className={Classes.logo_dates} />
    </div>
    </Fade>
  );
}

export default Banner;
