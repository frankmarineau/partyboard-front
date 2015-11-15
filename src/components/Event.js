import React from 'react';

import PhotoUpload from './PhotoUpload'
import SuccessPrompt from './SuccessPrompt'
import Gallery from './Gallery'

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShown: false
    };
  }

  render() {
    return (
      <main>
        <PhotoUpload eventSlug={this.props.params.eventSlug} onUpload={this.pictureUploaded.bind(this)}/>
        <SuccessPrompt message="Good job mon homme, YOLO!" open={this.state.isModalShown}/>
        <Gallery eventSlug={this.props.params.eventSlug}/>
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
