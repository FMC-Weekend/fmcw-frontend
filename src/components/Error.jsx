import * as React from 'react';
import './Error.css';

function Error() {
  return (
    <div className="error">
      <h1 style={{ color: 'black', padding: '10px' }}>
        Error during login, sign out and try again!
      </h1>
    </div>
  );
}

export default Error;
