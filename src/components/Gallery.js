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
      <div className="main">
        <div className="gallery">
          {this.state.pictures.map((pictureId, i) => {
            return <GalleryPicture pictureId={pictureId} eventSlug={this.props.eventSlug} key={i}/>;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    request.get({ url: `http://partyboard-api.willisite.com/events/${this.props.eventSlug}`, json: true }, this.dataIsReady.bind(this))
  }

  dataIsReady(err, res, body) {
    this.setState({ pictures: body.pictures });
  }
}

Gallery.propTypes = {
  eventSlug: React.PropTypes.string
};

export default Gallery;
