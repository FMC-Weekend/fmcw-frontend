import { useContext, useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import Classes from './Authentication.module.css';
// import { ReactComponent as Avatar1 } from './Group_7265.svg';
import { ReactComponent as Tt } from './icons8-google-480 1.svg';

function Authentication() {
  const authCtx = useContext(AuthContext);

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
  );
  const [IsnewUser, setIsNewUser] = useState(true);

  const handleFailure = (result) => {
    // alert('Unable to login using Google, Try again later!');
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData);
    const profile = googleData.profileObj;
    const email = googleData.profileObj.email;
    const name = googleData.profileObj.name;
    // authCtx.updateName(name);
    // authCtx.updateEmail(email);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);

    // send request to backend api and check if the user already exists or is a new one
    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('tokenID', googleData.tokenId);
      // authCtx.updateToken(googleData.tokenId)
      // Update context with value of token

      const isNewUser = data.user.newUser;
      // const isNewUser = true; // for trial purpose only // COMMENT THIS LINE

      sessionStorage.setItem('isNewUser', isNewUser);
      if (isNewUser) {
        window.location.href = '/register';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      // console.log(error)
      alert('Unable to login using Google, Try again later!');
    }
  };

  const handleLogout = (loginData) => {
    sessionStorage.removeItem('loginData');
  };
  return (
    <div className={Classes.auth_section}>
      {/* <h1>Hello World!</h1> */}

      <img src={process.env.REACT_APP_AWS_S3_URI + '/Group_7265.svg'} alt="Auth Animation"/>
      <div className={Classes.top}>Let's sign you in</div>
      <div className={Classes.top2}>
        Register to become a part of India's Largest Digital Art Fest
      </div>
      <div className={Classes.authenticateButton}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          // buttonText={`${googleText}`}
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy="single_host_origin"
          // icon={false}
          className={Classes.gButton}>
          <p>Sign in with Google</p>
        </GoogleLogin>
      </div>
    </div>
  );
}

export default Authentication;
