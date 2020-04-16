import React from 'react';

function CustomButton({ title, styles, handleOTPSubmit }) {
  return (
    <div>
      <button style={styles} onClick={() => handleOTPSubmit()}>
        {title}
      </button>
    </div>
  );
}

export default CustomButton;
