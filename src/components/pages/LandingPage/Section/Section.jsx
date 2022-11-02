import React from 'react';
import Classes from './Section.module.css';
import Button from './Button/Button';
import { motion } from 'framer-motion';

function Section(props) {
  return (
    <motion.div
      initial={{ scale: 0.3, rotate: -15 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', duration: 3 }}
      viewport={{ once: true }}
      className={Classes.section}>
      {/* <h2 >Title</h2> */}
      {/* <div > */}
      <h2 className={Classes.section_title}>{props.title}</h2>
      {/* </div> */}

      <div className={Classes.row}>
        <div className={Classes.column_1}>
          <p className={Classes.section_content}>{props.children}</p>
          <div className={Classes.section_button}>
            <a href={props.link}>
              <Button>{props.buttonText}</Button>
            </a>
          </div>
        </div>
        <div className={Classes.column_2}>
          {/* <h2>Column 2</h2>
          <p>Some text..</p> */}

          <img src={props.imagePath} className={Classes.section_image} />
        </div>
      </div>
    </motion.div>
  );
}
export default Section;
