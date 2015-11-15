require('styles/Slideshow.scss');

import React from 'react';
import request from 'request'

class Slideshow extends React.Component {
  constructor() {
    super();

    this.state = {
      pictures: [],
      intervalHandle: null
    };
  }

  render() {
    return (
      <div className="slideshow">
        {this.state.pictures.map((picture, i) => {
          return (
            <div key={i} style={{ height: "100%" }} className={`slideshow__content${picture.isVisible ? "" : " hidden"}`}>
              <div className="slideshow__bg" style={{backgroundImage: `url(${picture.url})`}}></div>
              <div style={{backgroundImage: `url(${picture.url})`}} className="slideshow__image"/>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    let baseEventUrl = `http://partyboard-api.willisite.com/events/${this.props.params.eventSlug}`;
    request.get({ url: baseEventUrl, json: true }, this.initialDataIsReady.bind(this));
    let es = new EventSource(`${baseEventUrl}/stream`);

    es.addEventListener('picture', (picture) => {
      let pictureUrl = JSON.parse(picture.data).url;

      let newPictures = this.state.pictures;
      newPictures.forEach(function(pic) {
        pic.isVisible = false;
      });

      newPictures.unshift({ isVisible: true, url: pictureUrl });

      clearInterval(this.state.intervalHandle);

      this.setState({
        pictures: newPictures
      });

      this.enableSlideshow();
    });
  }

  initialDataIsReady(err, res, body) {
    let pictures = body.pictures.map((pictureUrl) => { return { isVisible: false, url: pictureUrl }; });

    if (pictures.length > 0) {
      pictures[0].isVisible = true;
    }

    this.setState({
      pictures: pictures
    });

    this.enableSlideshow();
  }

  enableSlideshow() {
    let handle = setInterval(this.showNextPicture.bind(this), 5000);

    this.setState({
      intervalHandle: handle
    });
  }

  showNextPicture() {
    let pictures = this.state.pictures;

    let lastWasVisible = false;

    for (let i = 0; i < pictures.length ; i++) {
      if (lastWasVisible) {
        pictures[i].isVisible = true;
        break;
      }

      if (pictures[i].isVisible) {
        lastWasVisible = true;
        pictures[i].isVisible = false;

        if (i === pictures.length - 1) {
          pictures[0].isVisible = true;
        }
      }
    }

    this.setState({
      pictures: pictures
    });
  }
}

export default Slideshow;
