import React from 'react';1006
import './events.css';
import { Link } from 'react-router-dom';

function MobileLayout() {
  return (
    <div className="mobile">
      <h2>Events in</h2>
      <ul>
        <Link to="/events/photography">
          <li>
            Photography{' '}
          </li>
        </Link>
        <Link to="/events/cinematography">
          <li>
            Cinematography{' '}
          </li>
        </Link>
        <Link to="/events/outreach">
          <li>
            Outreach{' '}
          </li>
        </Link>
        <Link to="/events/design">
          <li>
            Design{' '}
          </li>
        </Link>
        <Link to="/events/media">
          <li>
            Media{' '}
          </li>
        </Link>
        <Link to="/events/animation">
          <li>
            Animation{' '}
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default MobileLayout;
