import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  isNewUser: true,
  name: '',
  email: '',
  userType: '', // IN, CA, PA
  updateToken: (token) => {},
  updateName: (name) => {},
  updateEmail: (email) => {},
  updateIsNewUser: (bool_val) => {},
  updateUserType: (userType) => {}
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [userType, setUserType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isLoggedIn = !!token;

  const modifyToken = (token) => {
    console.log(token);
    setToken(token);
    setIsLoggedIn(!!token);
    console.log(isLoggedIn);
  };

  const modifyName = (name) => {
    setName(name);
    console.log(name);
  };
  const modifyEmail = (email) => {
    setEmail(email);
  };
  const modifyIsNewUser = (bool_val) => {
    setIsNewUser(bool_val);
  };
  const modifyUserType = (userType) => {
    setUserType(userType);
  };

  const contextValue = {
    token: token,
    isNewUser: isNewUser,
    isLoggedIn: isLoggedIn,
    name: name,
    email: email,
    userType: userType,
    updateToken: modifyToken,
    updateName: modifyName,
    updateEmail: modifyEmail,
    updateIsNewUser: modifyIsNewUser,
    updateUserType: modifyUserType
  };
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
