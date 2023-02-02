import Loading from './Loading';
import './Cart.css';
import { useCart } from 'react-use-cart';
import CartCard_2 from './CartCard_2';
import CartWorkshopCard from './CartWorkshopCard';

import { NavLink, Link } from 'react-router-dom';
// import { Button } from '../components/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Footer from './Footer';
import CheckoutButton from './CheckoutButton/CheckoutButton';
import './CartCard_2.css';
import { useState, useEffect } from 'react';
import img1 from './CartInfo1.png';
import img2 from './CartInfo2.png';

import { ToastContainer, toast } from 'react-toastify';
import leftStar from './leftStar.png';
import rightStar from './rightStar.png';
import Fade from 'react-reveal/Reveal';
// import GooglePayButton from '@google-pay/button-react';
// import Button from './pages/LandingPage/Section/Button/Button';
import Button from './Button_2';
import WorkshopCard from './pages/Events/WorkshopCard';
import PassCard from './CartPass';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4
};
function Cart(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (sessionStorage.getItem('isLoggedIn') == 'true') {
      setOpen(true);
    } else {
      alert('Please Sign in first');
    }
  };
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => setOpen(false);
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  useEffect(() => {
    const getCartItems = async () => {
      console.log(isLoading), 'jhgdfsa';
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        });
        setIsLoading(false);
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
        alert('Error with authentication, login again');
      }
    };
    getCartItems();
    // console.log(isTokenValid());
  }, []);
  async function checkoutHandler() {
    let obj = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      amount: paymentAmount,
      transactionID: document.getElementById('ref').value
    };

    const mailData = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/send-mail', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    window.setTimeout(function () {
      location.reload();
    }, 1000);
    toast.warn('Event added to cart successfully!', {
      position: 'top-center',
      autoClose: 3000,
      draggable: true,
      icon: false
    });

    //ToDo: You just have to make an API request to /api/send-mail to send the email to the user with the details of the
    // event they have booked and the total payment amount
    // The body of the API request should contain: name, email, phone and paymentAmount of the user.
    // The API request should be made in the checkoutHandler function and you should use the register-form to get the email of user.
  }
  let paymentAmount = 0;
  for (const item of cartItems) {
    if (item.verifyStatus == false) {
      if (item.Type === 'Pass' && localStorage.getItem('checked')) {
        paymentAmount += item.price2;
      } else if (item.Type === 'Pass' && !localStorage.getItem('checked')) {
        paymentAmount += itm.price2;
      }
      else {
      paymentAmount += item.price;
      }
    } else if (item.verifyStatus == true) {
      checkoutHandler();
    }
    if (paymentAmount >= 699) {
      paymentAmount = paymentAmount * 0.9;
    }
  }

  return (
    <div>
      <section className="cart-page">
        <div className="cartTitle">
          <div>
            <img className="star1" src={leftStar}></img>
          </div>
          <div>
            <span className="heading">CART</span>
          </div>
          <div>
            <img className="star2" src={rightStar}></img>
          </div>
        </div>
        <div className="cartInfo">
          <div className="cartInfoHeading">
            Know how you can get access to more events within your budget
          </div>
          <div className="cartInfoDescription">
            Get ready to traverse the arena of digital arts with these exclusive passes that give
            you access to the grand 8th edition of FMC Weekend. We have a range of different passes
            including the super-combo called club passes which give you access to the complete
            package from any chosen category.
          </div>
          <button className="knowMoreBtn">
            <Link to="/passes">
              <p>Know More</p>
            </Link>
          </button>

          <Fade right>
            <div className="imgDiv">
              <img className="cartImg1" src={img1}></img>
              <img className="cartImg2" src={img2}></img>
            </div>
          </Fade>
        </div>

        {/* <div className="purchase_details"> */}
        {/* <a href="/events">
          <div className="add-more-cards">
          <span>+</span>
          <h3>Purchase More Cards</h3>
          </div>
        </a> */}
        {/* <div className="cart_cards">
            {cartItems.map((item, index) => {
              return (
                <div key={index} className="cart-container">
                <CartCard_2
                className="cart-card"
                title={item.title}
                type={item.Type}
                link={item.link}
                    price={item.price}
                    prize={item.prize}
                    name={item.name}
                    item={item}
                    key={index}
                    color={item.color}
                    color2={item.color2}
                    verified={item.verifyStatus}
                    mongooseId={item._id}
                  />
                </div>
              );
            })}
          </div> */}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="section_top" style={{ marginTop: '0px' }}>
              <div className="registered_contest">
                <h2>Contests</h2>
              </div>
            </div>
            <div className="lapTopView">
              <Fade left>
                <div className="contest_cards">
                  <div className="event_cards">
                    {cartItems.map((item, index) => {
                      console.log(item, index, 'fdsdfghioluyjtrgfguiu');
                      if (item.Type === 'Contest' && !item.verifyStatus) {
                        return (
                          <CartCard_2
                            img={item.img}
                            title={item.title}
                            type={item.type}
                            link={item.link}
                            price={item.price}
                            prize={item.prize}
                            content={item.content}
                            item={item}
                            key={index}
                            color={item.color}
                            color2={item.color2}
                            verified={item.verifyStatus}
                            mongooseId={item._id}
                          />
                        );
                      }
                      return '';
                    })}
                  </div>
                  {console.log(cartItems.length)}
                  {cartItems.length == undefined || cartItems.length == 0 ? (
                    <a href="/events">
                      <section
                        className="addContest"
                        style={{ margin: '0px 30px 50px', right: 'auto', position: 'relative' }}>
                        <h1>+</h1>
                        <h2>Add more contest</h2>
                      </section>
                    </a>
                  ) : (
                    <a href="/events">
                      <section className="addContest">
                        <h1>+</h1>
                        <h2>Add more contest</h2>
                      </section>
                    </a>
                  )}
                </div>
              </Fade>
            </div>
            <div className="mobileView">
              <div className="contest_cards">
                <div className="event_cards">
                  {cartItems.map((item, index) => {
                    if (item.Type === 'Contest' && !item.verifyStatus) {
                      return (
                        <CartCard_2
                          img={item.img}
                          title={item.title}
                          type={item.type}
                          link={item.link}
                          price={item.price}
                          prize={item.prize}
                          content={item.content}
                          item={item}
                          key={index}
                          color={item.color}
                          color2={item.color2}
                          top={'7vh'}
                          width={'260px'}
                          height={'329px'}
                          contentLeft={'12px'}
                          contentTop={'70px'}
                          contentWidth={'230px'}
                          contentFont={'16px'}
                          lineLeft={'23%'}
                          titleTop={'3px'}
                          imgLeft={'7px'}
                          viewStatementLeft={'50px'}
                          addToCartLeft={'6px'}
                          frontLeft={'20px'}
                          display={'none'}
                        />
                      );
                    }
                    return '';
                  })}
                  <a href="/events">
                    <section className="addContest2">
                      <h1>+</h1>
                      <h2>Add more contest</h2>
                    </section>
                  </a>
                </div>
              </div>
            </div>
            <div className="section_top" style={{ marginTop: '0px' }}>
              <div className="registered_contest">
                <h2>Workshops</h2>
              </div>
            </div>
            <div className="lapTopView">
              <div className="contest_cards">
                <div className="event_cards">
                  {cartItems.map((item, index) => {
                    console.log(item, index);
                    if (item.Type === 'Workshop' && !item.verifyStatus) {
                      return (
                        <CartWorkshopCard
                          img={item.img}
                          title={item.title}
                          type={item.type}
                          price={item.price}
                          name={item.name}
                          key={index}
                          color={item.color}
                          color2={item.color2}
                          verified={item.verifyStatus}
                          mongooseId={item._id}
                          desc={item.desc}
                          date={item.date}
                          left={'0px'}
                          time={item.time}
                        />
                      );
                    }
                    return '';
                  })}
                </div>

                {cartItems.length == undefined || cartItems.length == 0 ? (
                  <a href="/events">
                    <section
                      className="addWorkshop"
                      style={{ right: 'auto', position: 'relative' }}>
                      <h1>+</h1>
                      <h2>Add more Workshops</h2>
                    </section>
                  </a>
                ) : (
                  <a href="/events">
                    <section className="addWorkshop">
                      <h1>+</h1>
                      <h2>Add more Workshops</h2>
                    </section>
                  </a>
                )}
              </div>
            </div>
            <div className="mobileView">
              <div className="contest_cards">
                <div className="event_cards">
                  {cartItems.map((item, index) => {
                    if (item.Type === 'Workshop' && !item.verifyStatus) {
                      return (
                        <CartWorkshopCard
                          margin={'0'}
                          left={'0'}
                          img={item.img}
                          title={item.title}
                          type={item.type}
                          price={item.price}
                          name={item.name}
                          key={index}
                          color={item.color}
                          color2={item.color2}
                          
                          verified={item.verifyStatus}
                          mongooseId={item._id}
                          desc={item.desc}
                          date={item.date}
                          time={item.time}
                        />
                      );
                    }
                    return '';
                  })}
                  <a href="/events">
                    <section className="addContest2">
                      <h1>+</h1>
                      <h2>Add more Workshops</h2>
                    </section>
                  </a>
                </div>
              </div>
            </div>
            <div className="section_top" style={{ marginTop: '0px' }}>
              <div className="registered_contest">
                <h2>Passes</h2>
              </div>
            </div>
            <div className="lapTopView">
              <div className="contest_cards">
                <div className="event_cards">
                  {cartItems.map((item, index) => {
                    console.log(item, index);
                    if (item.Type === 'Pass' && !item.verifyStatus) {
                      return (
                        <PassCard
                          img1={item.img1}
                          img2={item.img2}
                          price1={item.price1}
                          price2={item.price2}
                          key={index}
                          verified={item.verifyStatus}
                          mongooseId={item._id}
                          item={item}
                        />
                      );
                    }
                    return '';
                  })}
                </div>
              </div>
              <a href="/passes">
                <img
                  src={process.env.REACT_APP_AWS_S3_URI + '/addPasses.svg'}
                  style={{
                    marginBottom: '50px',
                    right: 'auto',
                    position: 'relative',
                    width: '400px',
                    margin: '80px'
                  }}
                />
              </a>
            </div>
            <div className="mobileView">
              <div className="contest_cards">
                <div className="event_cards">
                  {cartItems.map((item, index) => {
                    if (item.Type === 'Pass' && !item.verifyStatus) {
                      return (
                        <PassCard
                          img1={item.img1}
                          img2={item.img2}
                          price1={item.price1}
                          price2={item.price2}
                          key={index}
                          verified={item.verifyStatus}
                          mongooseId={item._id}
                          item={item}
                        />
                      );
                    }
                    return '';
                  })}
                  <a href="/events">
                    <section className="addContest2">
                      <h1>+</h1>
                      <h2>Add more Passes</h2>
                    </section>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        {/* </div> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="payment-modal">
          <Box>
            <div className="back"></div>

            <form className="container">
              <h2>Checkout</h2>
              <p>
                Just one more step to go. Complete your transaction and be part of FMC Weekend’23.
              </p>
              <img src="Star.png" className="star3" />
              <img src="qr_fmc.jpeg" className="qr" />
              <div className="text">
                <label htmlFor="name" className="input-title">
                  <b>Name</b>
                </label>
                <input
                  className="register-input"
                  value={sessionStorage.getItem('name')}
                  type="text"
                  id="name"
                  placeholder="Name"
                  required
                />
                <hr />
                <label htmlFor="email" className="input-title">
                  <b>Email ID</b>
                </label>
                <input
                  className="register-input"
                  value={sessionStorage.getItem('email')}
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <hr />
                <label htmlFor="phone" className="input-title">
                  <b>Phone No</b>
                </label>
                <input
                  className="register-input"
                  type="tel"
                  id="phone"
                  placeholder="Contact Number"
                  required
                  pattern="^[0-9]{10,10}$"
                />
                <label htmlFor="transactionID" className="input-title">
                  <b>Transaction ID</b>
                </label>
                <input
                  className="register-input"
                  type="text"
                  id="ref"
                  placeholder="Transaction ID/Ref No"
                  required
                  pattern="^[0-9]{12,12}$"
                />
                <br></br>
                <label htmlFor="cart-amount">
                  <h3 className="price-info">
                    Total Price = ₹{' '}
                    {sessionStorage.getItem('email').endsWith('@iitbhu.ac.in') ||
                    sessionStorage.getItem('email').endsWith('@itbhu.ac.in')
                      ? 0
                      : paymentAmount.toFixed(2)}{' '}
                  </h3>
                </label>
              </div>
              {sessionStorage.getItem('email').endsWith('@iitbhu.ac.in') ||
              sessionStorage.getItem('email').endsWith('@itbhu.ac.in') ? (
                ''
              ) : (
                <button
                  type="submit"
                  onClick={checkoutHandler}
                  name="registor-button"
                  className="register-btn submit">
                  Submit
                </button>
              )}
              <img src="Cube.svg" className="cube1" />
            </form>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              <h1>Payment Details</h1>
            </Typography>
            <hr />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h3>The bank details are as follows:</h3>
              <ul>
                <li>
                  <span>Account Name: </span>
                  <h3>FMC Weekend IIT(BHU), Varanasi</h3>
                </li>
                <li>
                  <span>Account Number: </span>
                  <h3>33223440456</h3>
                </li>
                <li>
                  <span>IFSC: </span>
                  <h3>SBIN0011445</h3>
                </li>
                <li>
                  <span>Current Bank: </span>
                  <h3>State Bank of India</h3>
                </li>
                <li>
                  <span>Branch: </span>
                  <h3>IIT(BHU), Varanasi</h3>
                </li>
              </ul>
              <p className="form-para">
                {' '}
                We hereby request you to fill out this google form as soon as you complete the
                payment successfully and attach the screenshot of the payment with it. Do send the
                screenshot to your person of contact and feel free to enquire about the passes to
                them.<br></br>
                See you in large numbers at the fest!✨
              </p>

              <h3>Total Amount = ₹ {paymentAmount.toFixed(2)} </h3>
              <a href="https://forms.gle/Su8HRznfUAhfzjPcA" target="_blank" rel="noreferrer">
                <Button>Registeration Form</Button>
              </a>
            </Typography> */}
          </Box>
        </Modal>
        <div className="purchase_details">
          <div className="checkout_button2">
            {/* <CheckoutButton onClick={handleOpen}>CHECKOUT</CheckoutButton>*/}
            {sessionStorage.getItem('email').endsWith('@iitbhu.ac.in') ||
            sessionStorage.getItem('email').endsWith('@itbhu.ac.in') ? (
              ''
            ) : (
              <button className="checkoutBtn" onClick={handleOpen}>
                <p>CHECKOUT</p>
              </button>
            )}
          </div>
          {/* <h3>Total Items: ({cartItems.length})</h3> */}
          <div className="cost">
            <span className="checkoutCost">Total Cost :</span>

            <span className="checkoutCost">
              {' '}
              Rs{' '}
              {sessionStorage.getItem('email').endsWith('@iitbhu.ac.in') ||
              sessionStorage.getItem('email').endsWith('@itbhu.ac.in')
                ? 0
                : paymentAmount.toFixed(2)}{' '}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Cart;
