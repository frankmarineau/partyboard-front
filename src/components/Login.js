import React from 'react';
import request from 'request'
import FacebookButton from './FacebookButton'
import JoinEventForm from './JoinEventForm'

class Login extends React.Component {
  render() {
    return (
      <div className="site-wrap">
        <div className="logo">
          <span className="icon icon--logo-purple"></span>
        </div>
        <h2>Attend an event</h2>
        <JoinEventForm/>
        <hr/>
        <h2>Create an event</h2>
        <FacebookButton/>
      </div>
    );
  }

  componentDidMount() {
    if (document && document.body) {
      var orig = document.body.className;
      document.body.className = orig + (orig ? ' ' : '') + 'page--login page--white';
    }
  }

  componentWillUnmount() {
    if (document && document.body) {
      document.body.className = document.body.className.replace(/ ?page--login page--white/, '');
    }
  }
}

export default Login;
