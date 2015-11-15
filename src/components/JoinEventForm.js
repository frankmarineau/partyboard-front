import React from 'react';
import request from 'request'

class JoinEventForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter event code..." name="eventSlug" />
        <button tpye="submit">GO</button>
      </form>
    );
  }

  handleSubmit(e) {
    location = `/#/events/${e.target.eventSlug.value}`;
    e.preventDefault();
    return false;
  }
}

export default JoinEventForm;
