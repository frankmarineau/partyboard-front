import React from 'react';
import request from 'request'
import Cookies from 'Cookies'

import GalleryPicture from './GalleryPicture'

class EventList extends React.Component {

  render() {
    return (
      <div>
        {this.state.events.map((event, i) => {
          return <Event event={event} key={i}/>;
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
        "http://loremipsum.com/300/200",
        "http://loremipsum.com/300/201"
      ]
    }, {
      title: "wow",
      pictures: [
        "http://loremipsum.com/300/201",
        "http://loremipsum.com/300/202"
      ]
    }];
    this.setState({ pictures: body });
  }
}

export default EventList;
