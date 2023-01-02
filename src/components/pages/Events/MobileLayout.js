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
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </Link>
        <Link to="/events/cinematography">
          <li>
            Cinematography{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </Link>
        <Link to="/events/outreach">
          <li>
            Outreach{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </Link>
        <Link to="/events/design">
          <li>
            Design{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </Link>
        <Link to="/events/media">
          <li>
            Media{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </Link>
        <Link to="/events/animation">
          <li>
            Animation{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default MobileLayout;
