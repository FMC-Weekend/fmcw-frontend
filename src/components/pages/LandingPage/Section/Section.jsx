import Classes from './Section.module.css';
import Button from './Button/Button';
import Fade from 'react-reveal/Fade'

function Section(props) {
  return (
    <div className={Classes.section}>
      {/* <h2 >Title</h2> */}
      {/* <div > */}
      <Fade left duration={4000}><h2 className={Classes.section_title}>{props.title}</h2></Fade>
      {/* </div> */}

      <div className={Classes.row}>
        <div className={Classes.column_1}>
          <Fade duration={4000}><p className={Classes.section_content}>{props.children}</p></Fade>
          <div className={Classes.section_button}>
            <a href={props.link}>
              <Button>{props.buttonText}</Button>
            </a>
          </div>
        </div>
        <div className={Classes.column_2}>
          {/* <h2>Column 2</h2>
          <p>Some text..</p> */}

          <Fade right duration={4000}><img src={props.imagePath} className={Classes.section_image} /></Fade>
        </div>
      </div>
    </div>
  );
}
export default Section;
