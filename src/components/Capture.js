import React from 'react';

import PhotoUpload from './PhotoUpload'
import SuccessPrompt from './SuccessPrompt'
import Gallery from './Gallery'

class Capture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShown: false
    };
  }

  render() {
    return (
      <main>
        <header className="header">
          <h2 className="header__title">Events</h2>
        </header>
        <Gallery eventSlug={this.props.params.eventSlug}/>
        <PhotoUpload eventSlug={this.props.params.eventSlug}/>
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

export default Capture;
