/* eslint-disable react/react-in-jsx-scope */
import Loading from '../../Loading';
import { useState, useEffect, useContext } from 'react';
import Classes from './DashboardNew.module.css';
import EventCard from './EventCard';
import WorkshopCard from '../Events/WorkshopCard';
import { useCart } from 'react-use-cart';
import Button from './Button/Button';
import Footer from '../../Footer';
// import './Events.css';

function DashBoardNew() {
  // const authCtx = useContext()
  const { items } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Tony Stark',
    email: 'tony.stark@itbhu.ac.in',
    college: 'Foo',
    phone: 'XXXXXXXXXX',
    yearOfStudy: '2',
    instaHandle: '_blah_',
    userType: '-1',
    cartItems: [],
    refCode: '45646'
  });
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  const logoutHandler = () => {
    // console.log("yash");
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };
  useEffect(() => {
    const isTokenValid = async () => {
      setIsLoading(true);
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URI + '/api/user', {
          method: 'GET',
          // body: JSON.stringify({
          //   token: token
          // }),
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        });
        const data = await res.json();
        // console.log(data);

        // data has message : 'success' if valid and 'invalid' else
        // on valid, data also has user.email, user.name, user.isNewUser, user.role
        if (data.message === 'success') {
          localStorage.removeItem('react-use-cart');
          console.log(data);
          // console.log(data.user.userID.userCart.cartItems);
          if (data.user.userID) {
            setUserData((prevState) => ({
              // ...prevState,
              name: data.user.userID.name,
              email: data.user.userID.email,
              college: data.user.userID.college,
              phone: data.user.userID.number,
              // year: data.user.userID.yearOfStudy,
              instaHandle: data.user.userID.instaHandle,
              userType: data.user.userID.role,
              refCode: data.user.ref_code,
              // timesReferred: data.user.norefcode,
              cartItems: data.user.userID.userCart.cartItems
            }));
            sessionStorage.setItem('userID', data.user.userID._id);
          } else {
            setUserData((prevState) => ({
              // ...prevState,
              name: data.user.name,
              email: data.user.email,
              college: data.user.college,
              phone: data.user.number,
              year: data.user.yearOfStudy,
              instaHandle: data.user.instaHandle,
              userType: data.user.role,
              cartItems: data.user.userCart.cartItems,
              refCode: data.user.ref_code
              // timesReferred:
            }));
            sessionStorage.setItem('userID', data.user._id);
          }
        }
        sessionStorage.setItem('isLoggedIn', true);
        console.log(userData.cartItems);
      } catch (e) {
        console.log(e);
        alert('Error with authentication, login again');
        sessionStorage.clear();
      }
      await sleep(3000);
      setIsLoading(false);
    };
    isTokenValid();
    // window.location.reload();

    // console.log(isTokenValid());
  }, []);

  return (
    <div className={Classes.section}>
      <div className={Classes.section_top}>
        <div className={Classes.illus}>
          <img
            src="dashboard.svg"
            alt="illustration"
            style={{ paddingTop: '5vh', paddingRight: '5vw' }}
          />
        </div>
        <h3>Hi, </h3>
        <h2 className={Classes.userName}>{userData.name}!</h2>
        <section className={Classes.user_details}>
          <h2>
            Email: <span>{userData.email}</span>
          </h2>
          <h2>
            College: <span>{userData.college}</span>
          </h2>
          <h2>
            Year of Study: <span>{userData.yearOfStudy}</span>
          </h2>
          <h2>
            Referral Code: <span>{userData.refCode}</span>
          </h2>
          <h2>
            Instagram Handle: <span>{userData.instaHandle}</span>
          </h2>
          <h2>{userData.userType == '2' ? 'Campus Ambassador' : 'Participant'}</h2>
        </section>
      </div>
      <div className={Classes.section_top} style={{ marginTop: '0px' }}>
        <div className={Classes.registered_contest}>
          <h2>Registered Contests</h2>
        </div>
      </div>
      <div className={Classes.lapTopView}>
        <div className={Classes.contest_cards}>
          {/* <a href='/events'>
          <section className={Classes.addContest}>
            <h1>+</h1>
            <h2>Add more contest</h2>
          </section>
          </a> */}
          {/* <div className="event-cards"> */}
          <div className={Classes.event_cards}>
            {userData.cartItems.map((item, index) => {
              if (item.Type === 'Contest') {
                return (
                  <EventCard
                    top={"0"}
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
                  />
                );
              }
              return '';
            })}
          </div>
        </div>
      </div>
      <div className={Classes.mobileView}>
        <div className={Classes.contest_cards}>
          {/* <a href='/events'>
          <section className={Classes.addContest}>
            <h1>+</h1>
            <h2>Add more contest</h2>
          </section>
          </a> */}
          {/* <div className="event-cards"> */}
          <div className={Classes.event_cards}>
            {userData.cartItems.map((item, index) => {
              if (item.Type === 'Contest') {
                return (
                  <EventCard
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
          </div>
        </div>
      </div>
      <div className={`${Classes.registered_contest} ${Classes.section_top}`}>
        <h2>Registered Workshops</h2>
      </div>
            <div className={Classes.lapTopView}>
              
      <div className={Classes.contest_cards}>
        {/* <a href='/events'>
          <section className={Classes.addWorkshop}>
          <h1>+</h1>
          <h2>Add more workshop</h2>
          </section>
        </a> */}
        {/* <div className="event-cards"> */}
        <div className={Classes.event_cards}>
          {userData.cartItems.map((item, index) => {
            if (item.Type === 'Workshop') {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  name={item.name}
                  key={index}
                  color={item.color}
                  color2={item.color2}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                />
              );
              }
              return '';
            })}
        </div>
      </div>
            </div>
            <div className={Classes.mobileView}>
              
      <div className={Classes.contest_cards}>
        {/* <a href='/events'>
          <section className={Classes.addWorkshop}>
          <h1>+</h1>
          <h2>Add more workshop</h2>
          </section>
        </a> */}
        {/* <div className="event-cards"> */}
        <div className={Classes.event_cards}>
          {userData.cartItems.map((item, index) => {
            if (item.Type === 'Workshop') {
              return (
                <WorkshopCard
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
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                />
              );
              }
              return '';
            })}
        </div>
      </div>
            </div>
      <button className={Classes.logout_button} onClick={logoutHandler}>
        LOG OUT
      </button>
      <Footer />
    </div>
  );
}

export default DashBoardNew;
