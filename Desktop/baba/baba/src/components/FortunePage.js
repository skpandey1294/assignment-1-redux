import React from 'react';

import Card from './Card';
import BreakLines from './BreakLines';

function FortunePage() {
  return (
    <div>
      <BreakLines />
      <div>
        <h1 style={{ color: '#3a3c4a', fontFamily: 'Roboto, sans-serif' }}>
          {' '}
          Here is your Fortune{' '}
        </h1>
      </div>
      <BreakLines />
      <BreakLines />
      <Card />
      <BreakLines />
    </div>
  );
}

export default FortunePage;
