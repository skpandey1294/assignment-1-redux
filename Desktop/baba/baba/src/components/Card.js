import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      fortune: [],
      message: '',
      isSet: false,
      seq: null
    };
  }

  componentWillMount() {
    if (!this.state.isSet) {
      this.setState({
        isSet: true,
        seq: Math.floor(Math.random() * 3) + 1
      });
    }
  }
  componentDidMount() {
    fetch(
      `https://walrusbaba-app.herokuapp.com/fortune/sequence/${this.state.seq}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data[0].message);
        this.setState({
          fortune: data,
          message: data[0].message
        });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '20%',
              backgroundColor: '#faf859',
              paddingTop: '1%',
              paddingBottom: '4%',
              paddingLeft: '1%',
              paddingRight: '1%',
              textAlign: 'center',
              fontSize: '1.2em'
            }}
          >
            {this.state.message}
          </div>
        </div>
      </>
    );
  }
}

export default Card;
