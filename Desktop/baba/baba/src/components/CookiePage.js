import React from 'react';
import BreakLines from './BreakLines';

import { Link } from 'react-router-dom';

function CookiePage() {
  return (
    <div style={{ marginTop: '10%' }}>
      <div style={{ fontSize: 65, fontFamily: 'Roboto, sans-serif' }}>
        Open your cookie
      </div>
      <BreakLines />
      <div>
        <Link to="/fortune/user">
          {' '}
          <button style={{ width: '25%', border: '0' }}>
            <img
              style={{ width: '100%' }}
              src={require('../img/fortunecookie.webp')}
              alt="cookie"
            ></img>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CookiePage;
