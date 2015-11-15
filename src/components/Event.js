import React from 'react';
import request from 'request'

class Event extends React.Component {
  render() {
    return (
      <div>
        event
      </div>
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
