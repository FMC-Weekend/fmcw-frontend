import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer';
import { ToastContainer } from 'react-toastify';
import WorkshopCard from '../WorkshopCard';
function Cinematography() {
  return (
    <div style={{ background: '#1D033E', overflow: 'hidden' }}>
      <ToastContainer
        draggable={true}
        toastClassName="toast-style"
        toastStyle={{ backgroundColor: '#FCC907', color: '#1D033E', fontWeight: 'bold' }}
      />
      <section className="section">
        <Link to="/events" className="back-btn" style={{ background: '#14F0B9' }}>
          Back
        </Link>
        <div className="card-container">
          <div className="event-cards">
            {data.cineData.map((item, index) => {
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
            })}
          </div>
          {/* <div className="workshop-cards">
            {data.cineWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cinematography;
