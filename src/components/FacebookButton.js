import React from 'react';
import request from 'request'

class FacebookButton extends React.Component {
  render() {
    return (
      <a className="btn btn--primary" href="/#/events/new"><span className="btn__icon icon--facebook"></span>Connect with Facebook</a>
    );
  }
}

export default FacebookButton;
