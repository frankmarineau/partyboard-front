import React from 'react';
import request from 'request'

import PhotoUpload from './PhotoUpload'

class Event extends React.Component {
  render() {
    return (
      <PhotoUpload eventSlug={this.props.routeParams.eventSlug} onUpload={this.pictureUploaded}/>
    );
  }

  pictureUploaded(err, res, body) {
    console.log(err);
  }
}

export default Event;
