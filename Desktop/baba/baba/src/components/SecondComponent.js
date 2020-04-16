import React, { Component } from 'react';

import styleSheet from './style';

import CustomButton from './CustomButton';
import BreakLines from './BreakLines';
import OTP from './OTP';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

let mobile,
  otp,
  otpEntered = '';

class SecondComponent extends Component {
  constructor() {
    super();
    this.state = {
      cookie: true,
      request: false,
      phoneNumber: 0
    };
  }

  sendOTP = () => {
    otp = Math.floor(Math.random() * 10000);

    if (!isNaN(this.state.phoneNumber) && mobile / 1000000000 > 1) {
      while (otp / 1000 < 1) {
        otp = Math.floor(Math.random() * 10000);
      }
      fetch('https://walrusbaba-app.herokuapp.com/user/info', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: `${mobile}`,
          OTP: otp
        })
      })
        .then(data => {
          // alert('OTP is sent');
        })
        .catch(err => console.error(err));
    } else {
      alert('Phone Number is incorrect!!! Please try again');
    }
  };

  enteredOTP = _otp => {
    if (otpEntered.length < 4) {
      otpEntered = otpEntered + `${_otp}`;
      console.log(otpEntered);
    } else {
      otpEntered = '';
    }
  };

  handleOTPSubmit = () => {
    if (`${otpEntered}`.length < 4) {
      if (`${otpEntered}`.length === 0) {
        alert('Please Enter the OTP');
      } else {
        alert('!!!Please Enter Correct OTP!!!');
      }
    } else {
      fetch(`https://walrusbaba-app.herokuapp.com/user/${otpEntered}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.length !== 0) {
            console.log(`Data:${data}`);
            window.location.href = `/fortune`;
          } else {
            alert('wrong OTP');
          }
        })
        .catch(error => console.error(error));
    }
  };

  render() {
    return (
      <>
        <BreakLines />
        <div style={{ marginRight: '0.9%', fontSize: '1.2vw', fontFamily: 'Roboto, sans-serif' }}>
          <b>Enter some Details to proceed</b>
        </div>
        <BreakLines />
        <div style={{ marginRight: '9%' }}>Your Phone No</div>
        <br></br>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            type="number"
            variant="outlined"
            onChange={event => {
              mobile = event.target.value;
              this.setState({
                phoneNumbem: event.target.value
              });
            }}
          />
          <Button
            style={{ paddingTop: '1%', paddingBottom: '0.8%' }}
            onClick={() => {
              this.sendOTP();
            }}
          >
            Send OTP
          </Button>
        </form>
        <div style={{ marginLeft: '38.5%', marginTop: '2%' }}>
          {' '}
          <OTP enteredOTP={this.enteredOTP} />
        </div>
        <BreakLines />
        <CustomButton
          title={'TAKE ME TO MY KISMAT'}
          styles={styleSheet.customButton}
          handleOTPSubmit={this.handleOTPSubmit}
        />
        <BreakLines />
      </>
    );
  }
}

export default SecondComponent;
