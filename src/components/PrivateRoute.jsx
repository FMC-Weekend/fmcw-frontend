import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Dashboard from './pages/Dashboard/Old';
import Error from './Error';
import Loading from './Loading';
// var isValid = false;
// var isNewUser = false;
// var userRole = -1;

const PrivateRoute = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const isTokenValid = async () => {
      setIsLoading(true);
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/verify-token', {
          method: 'POST',
          body: JSON.stringify({
            token: token
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();

        // data has message : 'success' if valid and 'invalid' else
        // on valid, data also has user.email, user.name, user.isNewUser, user.role
        if (data.message === 'success') {
          console.log(data);
          setIsValid(true);
          setIsNewUser(data.isNewUser); //data.user.isNewUser
          // userRole = data.user.role;
        }
      } catch {
        console.log('Error with authentication, login again');
      }

      // await sleep(5000);
      // let data = [true, true, true];
      // setIsValid(data[0]);
      // setIsNewUser(data[1]);
      setIsLoading(false);
    };
    isTokenValid();

    // console.log(isTokenValid());
  }, []);

  if (props.path === '/register') {
    return (
      <Route
        path={props.path}
        component={isLoading ? Loading : isNewUser && isValid ? props.component : Error}></Route>
    );
  } else if (props.path === '/dashboard') {
    return (
      <Route
        path={props.path}
        component={isLoading ? Loading : !isNewUser && isValid ? props.component : Error}></Route>
    );
  }

  // return null;
};

export default PrivateRoute;
