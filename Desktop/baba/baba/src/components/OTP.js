import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

class OTP extends Component {
  render() {
    return (
      <div>
        <OtpInput
          onChange={otp => this.props.enteredOTP(otp)}
          numInputs={4}
          value={false}
          separator={<span>-</span>}
          inputStyle={{
            width: '3rem',
            height: '3rem',
            margin: '0 1rem',
            fontSize: '2rem',
            borderRadius: '4px',
            border: '1px solid rgba(0,0,0,0.3)'
          }}
        />
      </div>
    );
  }
}

export default OTP;
