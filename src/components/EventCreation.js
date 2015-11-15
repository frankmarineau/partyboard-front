import React from 'react';
import request from 'request'

import EventDetails from './EventDetails'

class EventCreation extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Event title</label>
        <input type="text" placeholder="e.g.: Amy's birthday" name="title"/>

        <label>Event ID</label>
        <input type="text" placeholder="e.g.: amy-birthday" name="slug"/>

        <button type="submit">Save</button>
      </form>
    );
  }

  saveEvent(e) {
    request.post({
      url: 'http://partyboard-api.willisite.com/events',
      data: {
        title: e.target.title.value,
        slug: e.target.slug.value
      }
    }, this.onResponse.bind(this));
  }

  onResponse(err, res, body) {
    if (err) return;
    location = `/events/${body.slug}`;
  }
}

export default EventCreation;
