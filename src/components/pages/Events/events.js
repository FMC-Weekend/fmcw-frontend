import React from 'react';
import MobileLayout from './MobileLayout';
import SideBar from './Sidebar';
import './events.css';
import Footer from '../../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Events() {
  return (
    <div className="event_page">
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
