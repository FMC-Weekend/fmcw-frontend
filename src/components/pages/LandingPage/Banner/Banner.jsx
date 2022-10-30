/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion';
import Classes from './Banner.module.css';

function Banner(props) {
  return (
    <div className={Classes.banner}>
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'easein', duration: 5, delay: 0.5 }}
        src="/HERO-WO-LOGO-011.svg"
        className={Classes.image}
      />
      <img src="/mobile-hero-section-02.svg" className={Classes.mobile_hero} />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'easein', duration: 2, delay: 3 }}
        src="/Group_7139.svg"
        className={Classes.logo_dates}
      />
    </div>
  );
}

export default Banner;
