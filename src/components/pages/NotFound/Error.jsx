/* eslint-disable prettier/prettier */
import Classes from './Error.module.css';
import Error1 from '../../Error1.png';
import Error2 from './Error2.png';
import Error3 from '../../Error3.png';
import Error4 from '../../Error4.png';

function Error() {
  return (
    <div className={Classes.error}>
      <img src={Error1} className={Classes.Error1} />
      <img src={Error2} className={Classes.Error2} />
      <img src={Error3} className={Classes.Error3} />
      <img src={Error4} className={Classes.Error4} />
      <a href="/">
        <button className={Classes.register_button}>
          <p>Home</p>
        </button>
      </a>
    </div>
  );
}

export default Error;
