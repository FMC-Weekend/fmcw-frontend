import React from 'react';
import Menu from './SideBar/Menu';
import classes from './Sponsors.module.css';
import SponsorSection from './SponsorSection/SponsorSection';
import data from './TeamData';
import Card from './SponsorSection/TeamCard';
import Footer from '../../Footer';

function Sponsors() {
  return (
    <div className={classes.wrapper}>
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
