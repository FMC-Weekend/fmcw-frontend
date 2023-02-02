import { Fragment, useContext, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import Classes from './Registeration.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import startsWith from 'lodash.startswith';

function RegisterationForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      email: e.target[1].value,
      college: e.target[2].value,
      number: value,
      // year: e.target[3].value,
      redeem: e.target[4].value,
      instaHandle: e.target[5].value,
      userType: e.target[6].value //insti user usertype 0
    };

    const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/user', {
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log({ obj });
    const data = await res.json();
    console.log(data);

    if (data.message === 'success') {
      window.location.href = '/dashboard';
    } else {
      // alert('login failed, please try later');
      alert(data.message);
      // window.location.href = "/register";
    }

    // window.location.reload();
  }
  const [value, setValue] = useState();
  const authCtx = useContext(AuthContext);
  return (
    <form className={`${Classes.section} ${Classes.form_class}`} onSubmit={(e) => handleSubmit(e)}>
      <div className={Classes.container}>
        <img src="Star.png" className={Classes.star}  alt="" />
        <p className={Classes.main_title}>Register</p>
        <p className={Classes.top}>
          {' '}
          Let's get to know you a bit. We are a step closer to the world of FMC Weekend.{' '}
        </p>
        <input
          type="text"
          name="name"
          value={sessionStorage.getItem('name')}
          required
          readOnly
          hidden
        />
        <input
          type="email"
          name="email"
          value={sessionStorage.getItem('email')}
          required
          readOnly
          hidden
        />
        <label htmlFor="college" className={Classes.title}>
          <b>University / College Name</b>
        </label>
        {sessionStorage.getItem('email').endsWith('@iitbhu.ac.in') ||
        sessionStorage.getItem('email').endsWith('@itbhu.ac.in') ? (
          <input
            type="text"
            name="college"
            value="Indian Institute of Technology (BHU) Varanasi"
            required
            readOnly
          />
        ) : (
          <input
            type="text"
            name="college"
            placeholder="e.g. - Indian Institute of Technology (BHU) Varanasi"
            required
          />
        )}
        <label htmlFor="phone" className={Classes.title}>
          <b>Phone Number</b>
        </label>
        <PhoneInput
          inputProps={{
            id: 'phone',
            required: true
          }}
          inputStyle={{
            width: '100%',
            display: 'inline-block',
            border: '2px solid #000000',
            background: '#f7f7f7',
            borderRadius: '0',
            height: '58px',
            fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            marginBottom: '15px'
          }}
          buttonStyle={{ borderRadius: '0', border: '2px solid black', margin: 'auto' }}
          containerStyle={{ width: '70%' }}
          country={'in'}
          value={value}
          onChange={setValue}
          autoFormat="true"
        />

        {/* <input type="tel" name="phone" placeholder="" required pattern="^[0-9]{10,10}$" /> */}
        {sessionStorage.getItem('email').endsWith('@iitbhu.ac.in') ||
        sessionStorage.getItem('email').endsWith('@itbhu.ac.in') ? (
          <>
            <label htmlFor="year" className={Classes.title}>
              <b>Year of Study</b>
            </label>
            <select name="year">
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
            </select>
          </>
        ) : (
          ''
        )}
        <label htmlFor="redeem" className={Classes.title}>
          <b>Referral Code</b>
        </label>
        <input type="text" id="redeem" name="redeem" placeholder="XXXXXX" />
        <label htmlFor="insta" className={Classes.title}>
          <b>Instagram Handle</b>
        </label>
        <input type="text" id="insta" name="insta" placeholder="" required />
        <label htmlFor="position" className={Classes.title}>
          <b>Wanna be a?</b>
        </label>
        <select name="position">
          {sessionStorage.getItem('email').endsWith('@iitbhu.ac.in') ||
          sessionStorage.getItem('email').endsWith('@itbhu.ac.in') ? (
            <option value="0">Participant</option>
          ) : (
            <Fragment>
              <option value="1">Participant</option>
              <option value="2">Campus Ambassador</option>
            </Fragment>
          )}
        </select>
        <div className={Classes.button_div}>
          <button className={Classes.submit} type="submit">
            Submit
          </button>
        </div>
        <img src="Cube.svg" className={Classes.cube}  alt="" />
      </div>
    </form>
  );
}

export default RegisterationForm;
