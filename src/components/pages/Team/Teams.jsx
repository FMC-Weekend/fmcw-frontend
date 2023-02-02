import Menu from './SideBar/Menu';
import classes from './Sponsors.module.css';
import SponsorSection from './SponsorSection/SponsorSection';
import data from './TeamData';
import Card from './SponsorSection/TeamCard';
import Footer from '../../Footer';
import { useEffect, useRef } from 'react';

function Sponsors() {
  const ref_container = useRef();
  useEffect(() => {
    const scrollDiv = document.getElementById("header").offsetTop;
    window.scrollTo({top : scrollDiv-200 , behavior : "smooth"});
  }, [])
  return (
    <div className={classes.wrapper} id="header" ref_container={useRef}>
      <div className={classes.sidebar}>
        <Menu />
      </div>
      <div className={classes.main}>
        <SponsorSection sponsorId="sponsor_1" href="#sponsor_1" />
      </div>
    </div>
  );
}

export default Sponsors;
