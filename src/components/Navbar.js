/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo from './navlogo.png';
import AuthContext from '../store/auth-context';
import { useCart } from 'react-use-cart';
import GoogleLogin from 'react-google-login';

function Navbar() {
  const authCtx = useContext(AuthContext);

  const { totalItems } = useCart();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [IsnewUser, setIsNewUser] = useState(true);
  const [cartItems, setCartItems] = useState([]);

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
      alert('Unable to login using Google, Try again later!');
    }
  };

  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };
  window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      nav.classList.add('add-shadow');
    } else {
      nav.classList.remove('add-shadow');
    }
  });
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  useEffect(() => {
    const getCartItems = async () => {
      // setIsLoading(true);
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        });
        const data = await res.json();
        // console.log(data);

        if (data.message === 'success') {
          console.log(data);
          // console.log(data.user.userID.userCart.cartItems);
          if (data.user.userID) {
            setCartItems(data.user.userID.userCart.cartItems);
          } else {
            setCartItems(data.user.userCart.cartItems);
          }
        }
      } catch (e) {
        console.log(e);
        // alert('Error with authentication, login again');
      }
    };
    getCartItems();
    // console.log(isTokenValid());
  }, []);
  let length=0;
  for(const item of cartItems) {
    if(!item.verifyStatus) {
      length += 1;
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-icon">
          <div className="icon-container">
            <NavLink exact to="/">
              <svg
                width="114"
                height="53"
                viewBox="0 0 114 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M35.4048 43.0654V0H0.5L6.05963 6.8595H28.617V13.3434H11.3155L16.8733 20.2029H28.617V34.6921L35.4048 43.0654Z"
                  fill="black"
                />
                <path
                  d="M78.5957 43.0654V0H113.5L103.873 11.3016H95.0992L99.1684 6.8595H85.3835V23.8672L90.3734 18.1611H99.1458L78.5957 43.0654Z"
                  fill="black"
                />
                <path
                  d="M45.7714 10.7735V28.5113L38.4912 35.4185V0H75.5108V11.5094L68.2306 18.4185V10.7735L57.0019 20.8511L45.7714 10.7735Z"
                  fill="black"
                />
                <path
                  d="M38.4912 53.0002V39.1611L45.7714 32.2539V35.819L57.0001 25.7395L68.2306 35.819V22.1591L75.5108 15.252V53.0002L57.0001 35.4396L38.4912 53.0002Z"
                  fill="black"
                />
              </svg>
            </NavLink>
          </div>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item first_item">
            <NavLink
              to="/events"
              className="nav-links"
              activeClassName="target"
              // style={{marginLeft: "30px"}}
              onClick={closeMobileMenu}>
              EVENTS
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              to="/pronites"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              PRONITES
            </NavLink>
          </li> */}
          {/* <li className="nav-item">
            <NavLink
              to="/passes"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              GLIMPSES
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              to="/FAQ"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/team"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              TEAM
            </NavLink>
          </li>
          <li className="nav-item">
            {sessionStorage.getItem('isLoggedIn') == 'true' && (
              <NavLink to="/cart" activeClassName="target" onClick={closeMobileMenu}
                className={length ? 'cartBtn nav-links' : 'cartBtn empty_cart nav-links'}>
                <span id="quantity">
                  <p style={{ fontSize: '13px' }}>{length}</p>
                </span>
                <i className="fas fa-shopping-cart" style={{display: "flex"}}><p className='cartText'>CART</p></i>
              </NavLink>
            )}
          </li>
          <li className="nav-item">
            {sessionStorage.getItem('isLoggedIn') == 'true' ? (
              <Button
                width={'auto'}
                isInternalLink
                toLink="/dashboard"
                className="nav-register-btn"
                onClick={closeMobileMenu}>
                <div className="register-btn-text">DASHBOARD</div>
              </Button>
            ) : (
              <Button
                width={'auto'}
                padding={'3vw'}
                isInternalLink
                toLink="/authentication"
                className="nav-register-btn"
                onClick={closeMobileMenu}>
                <div className="register-btn-text">REGISTER</div>
              </Button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;