import React from 'react';

function BroughtToYouBy({ styles, img }) {
  return (
    <div style={styles}>
      <div>Brought to you by</div>
      <a href="https://clubwalrus.com/">
        <img
          style={styles.img}
          src={require('../img/walruspay.jpeg')}
          alt="walruspay"
        />
      </a>
      <div>India's first bank account only for teenagers</div>
    </div>
  );
}

export default BroughtToYouBy;
