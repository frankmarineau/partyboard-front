import React from 'react';
import request from 'request'

import Event from './Event'

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
        {this.state.events.map((event, i) => {
          return <Event title={event.title} pictures={event.pictures} key={i}/>;
        })}
      </div>
    );
  }

  componentDidMount() {
    // request.get({ url: 'http://d7867bdd.ngrok.io/events/', json: true }, this.dataIsReady.bind(this));
    setTimeout(this.dataIsReady.bind(this), 1500);
  }

  dataIsReady(err, res, body) {
    body = [{
      title: "allo oui",
      pictures: [
        "http://lorempixel.com/300/200",
        "http://lorempixel.com/300/201"
      ]
    }, {
      title: "wow",
      pictures: [
        "http://lorempixel.com/300/201",
        "http://lorempixel.com/300/202"
      ]
    }];

    this.setState({ events: body });
  }
}

export default EventList;
