import React from 'react';
import request from 'request'
import FacebookButton from './FacebookButton'
import JoinEventForm from './JoinEventForm'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Partyboard</h1>
        <h2>Attend an event</h2>
        <JoinEventForm />
        <h2>Host an event</h2>
        <FacebookButton />
      </div>
    );
  }
}

export default Home;
