/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import Classes from './Section.module.css';
import Button from './Button/Button';
import { motion } from 'framer-motion';

function Section(props) {
  return (
    <motion.div
      whileInView={{
        x: [500, 0],
        y: [200, 0],
        scale: [0, 1],
        rotate: [30, 0],
        opacity: [0, 1]
      }}
      transition={{ type: 'easein', duration: 1.1 }}
      className={Classes.section}>
      {/* <h2 >Title</h2> */}
      {/* <div > */}
      <h2 className={Classes.section_title}>{props.title}</h2>
      {/* </div> */}

      <div className={Classes.row}>
        <div className={Classes.column_1}>
          <p className={Classes.section_content}>{props.children}</p>
          <div className={Classes.section_button}>
            <motion.a whileHover={{ scale: 1.1 }} href={props.link}>
              <Button>{props.buttonText}</Button>
            </motion.a>
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
