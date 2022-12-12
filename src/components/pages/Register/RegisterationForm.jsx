import React, { Fragment, useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import Classes from './Registeration.module.css';
function RegisterationForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      email: e.target[1].value,
      college: e.target[2].value,
      number: e.target[3].value,
      year: e.target[4].value,
      redeem: e.target[5].value,
      instaHandle: e.target[6].value,
      userType: e.target[7].value //insti user usertype 0
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
  }
  const authCtx = useContext(AuthContext);
  return (
    <div className={Classes.section}>
      <form
        className={`${Classes.section} ${Classes.form_class}`}
        onSubmit={(e) => handleSubmit(e)}>
        <div className={Classes.container}>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input type="text" name="name" value={sessionStorage.getItem('name')} required readOnly />
          <label htmlFor="email">
            <b>E-mail</b>
          </label>
          <input
            type="email"
            name="email"
            value={sessionStorage.getItem('email')}
            required
            readOnly
          />
          <label htmlFor="college">
            <b>University / College</b>
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

          <label htmlFor="phone">
            <b>Phone Number (+91)</b>
          </label>
          <input type="tel" name="phone" required />
          <label htmlFor="year">
            <b>Year of Study</b>
          </label>
          <select name="year">
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
            <option value="5">V</option>
          </select>
          <label htmlFor="redeem">
            <b>Referral Code</b>
          </label>
          <input type="text" name="redeem" placeholder="XXXXXX" />
          <label htmlFor="insta">
            <b>Instagram Handle</b>
          </label>
          <input type="text" name="insta" placeholder="" required />
          <label htmlFor="position">
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
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
    //     <form>

    //     <div className={Classes.container}>
    //       <h1>Sign Up</h1>
    //       <p>Please fill in this form to create an account.</p>

    //           <label for="email"><b>Username</b></label>
    //         <input type="text" name="username" placeholder="Enter Username" required />
    //       <label for="email"><b>Email</b></label>
    //       <input type="text" placeholder="Enter Email" name="email" required />

    //       <label for="psw"><b>Password</b></label>
    //       <input type="password" placeholder="Enter Password" name="psw" required />

    //               <label for="email"><b>Phone Number</b></label>
    //         <br/>
    //        <select name="phoneCode" required>
    //         <option selected hidden value="">Code</option>
    //         <option value="66">+98</option>
    //         <option value="66">+99</option>
    //         <option value="66">+90</option>
    //         <option value="66">+66</option>
    //        </select>
    //        <input type="phone" name="phone" placeholder="812345678" required />

    //       <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    //       <div class="clearfix">

    //         <button type="submit" class="btn">Sign Up</button>
    //       </div>
    //     </div>

    //   </form>
  );
}

export default RegisterationForm;
