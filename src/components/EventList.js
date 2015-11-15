import React from 'react';
import request from 'request'

import EventListElement from './EventListElement'

class EventList extends React.Component {
  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  render() {
    return (
      <div>
        <a href="/#/events/new">Create event</a>
        {this.state.events.map((event, i) => {
          return <EventListElement event={event} key={i} onDelete={this.deleteEvent}/>;
        })}
      </div>
    );
  }

  deleteEvent() {

  }

  componentDidMount() {
    request.get({ url: 'http://partyboard-api.willisite.com/events', json: true }, this.dataIsReady.bind(this));
  }

  dataIsReady(err, res, body) {
    this.setState({ events: body.events });
  }
}

export default EventList;
