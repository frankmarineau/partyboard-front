import React from 'react';
import request from 'request'
import FacebookButton from './FacebookButton'
import JoinEventForm from './JoinEventForm'

class Home extends React.Component {
  render() {
    return (
      <div className="site-wrap">
        <div className="logo">
          <span className="icon icon--logo-white"></span>
          <h1 className="logo__type">Partyboard</h1>
        </div>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        <a className="btn btn--reverse" href="/#/login">Get Started</a>
      </div>
    );
  }

  componentDidMount() {
    if (document && document.body) {
      var orig = document.body.className;
      document.body.className = orig + (orig ? ' ' : '') + 'page--home page--purple';
    }
  }

  componentWillUnmount() {
    if (document && document.body) {
      document.body.className = document.body.className.replace(/ ?page--home page--purple/, '');
    }
  }
}

export default Home;
