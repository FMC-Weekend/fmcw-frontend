import React from 'react';
import MobileLayout from './MobileLayout';
import SideBar from './Sidebar';
import './events.css';
import Footer from '../../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';

function Events() {
  const ref_container = useRef();
  useEffect(() => {
    const scrollDiv = document.getElementById("header").offsetTop;
    window.scrollTo({top : scrollDiv-200 , behavior : "smooth"});
  }, [])

  return (
    <div className="event_page" id="header" ref_container={useRef}>
      <ToastContainer
        draggable={true}
        toastClassName="toast-style"
        toastStyle={{ backgroundColor: '#FCC907', color: '#1D033E', fontWeight: 'bold' }}
      />
      <div className="sidebar">
        <SideBar />
        <Footer />
      </div>
      <div className="showOnMobile">
        <MobileLayout />
        <Footer />
      </div>
    </div>
  );
}

export default Events;
