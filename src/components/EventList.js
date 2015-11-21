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
      <main>
        <header className="header">
          <h2 className="header__title">Events</h2>
        </header>

        {this.state.events.map((event, i) => {
          return <EventListElement event={event} key={i} onDelete={this.deleteEvent}/>;
        })}
      </main>
    );
  }

  componentDidMount() {
    request.get({ url: 'http://partyboard-api.willisite.com/events/', json: true }, this.dataIsReady.bind(this));
  }

  dataIsReady(err, res, body) {
    this.setState({ events: body });
  }
}

export default EventList;
