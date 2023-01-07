import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
import { Link } from 'react-router-dom';

function AllEvents() {
  return (
    <div>
      <section className="section">
        <Link to="/events" className="back-btn" style={{ background: '#FE6263' }}>
          Back
        </Link>
        <div className="card-container">
          <div className="event-cards">
            {data.allEventsData.map((item, index) => {
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
        </div>
      </section>
    </div>
  );
}

export default AllEvents;
