import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer';
import { ToastContainer } from 'react-toastify';
import WorkshopCard from '../WorkshopCard';
function Outreach() {
  return (
    <div style={{ background: '#1D033E', overflow: 'hidden' }}>
      <ToastContainer
        draggable={true}
        toastClassName="toast-style"
        toastStyle={{ backgroundColor: '#FCC907', color: '#1D033E', fontWeight: 'bold' }}
      />
      <section className="section">
        <Link to="/events" className="back-btn" style={{ background: '#FFC900' }}>
          Back
        </Link>
        <div className="card-container">
          <div className="event-cards">
            {data.outreachData.map((item, index) => {
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
                  mode={item.mode}
                  frontLeft={'20px'}
                  display={'none'}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.outreachWorkshopData.map((item, index) => {
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
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Outreach;
