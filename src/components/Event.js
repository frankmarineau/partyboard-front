import React from 'react';
import request from 'request'

import PhotoUpload from './PhotoUpload'
import SuccessPrompt from './SuccessPrompt'
import Gallery from './Gallery'

class Event extends React.Component {
  render() {
    return (
      <main>
        <PhotoUpload eventSlug={this.props.routeParams.eventSlug} onUpload={this.pictureUploaded.bind(this)}/>
        <SuccessPrompt message="Good job mon homme, YOLO!" open={this.state.isModalShown}/>
        <Gallery eventSlug={this.props.routeParams.eventSlug}/>
      </main>
    );
  }

  pictureUploaded(err, res, body) {
    this.setState({ isModalShown: true });

    setTimeout(() => {
      this.setState({ isModalShown: false });
    }, 2500);
  }
}

export default Event;
