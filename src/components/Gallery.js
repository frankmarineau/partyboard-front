import React from 'react';
import request from 'request'

import GalleryPicture from './GalleryPicture'

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      pictures: []
    };
  }

  render() {
    return (
      <div>
        {this.state.pictures.map((pictureUrl, i) => {
          return <GalleryPicture url={pictureUrl} key={i}/>;
        })}
      </div>
    );
  }

  componentDidMount() {
    // request.get({ url: `http://d7867bdd.ngrok.io/events/${this.props.eventSlug}`, json: true }, this.dataIsReady.bind(this))
    setTimeout(this.dataIsReady.bind(this), 1500);

    var es = new EventSource(`http://d7867bdd.ngrok.io/events/${this.props.eventSlug}`);
  }

  dataIsReady(err, res, body) {
    body = ["http://lorempixel.com/300/300", "http://lorempixel.com/301/300", "http://lorempixel.com/300/301", "http://lorempixel.com/303/301"];
    this.setState({ pictures: body });
  }
}

export default Gallery;
