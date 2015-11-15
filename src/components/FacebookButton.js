import React from 'react';
import request from 'request'

class FacebookButton extends React.Component {
  render() {
    return (
      <a href="http://api.alloallo.com/facebook/auth" className="btn btn--facebook">Facebook</a>
    );
  }
}

export default FacebookButton;
