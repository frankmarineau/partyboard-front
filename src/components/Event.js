import React from 'react';
import request from 'request'

import PhotoUpload from './PhotoUpload'
import SuccessPrompt from './SuccessPrompt'

class Event extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalShown: false
    };
  }

  render() {
    return (
      <main>
        <PhotoUpload eventSlug={this.props.routeParams.eventSlug} onUpload={this.pictureUploaded}/>
        <SuccessPrompt message="Good job mon homme, YOLO!" open={this.state.isModalShown}/>
      </main>
    );
  }

  pictureUploaded(err, res, body) {
    this.setState({ isModalShown: true });
  }
}

export default Event;
