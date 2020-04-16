import React from 'react';

function CustomImage({styles}) {
  return (
    <div>
      <img
        style={styles}
        src={require('../img/download.jpeg')}
        alt="walrusbaba"
      />
    </div>
  );
}

export default CustomImage;
