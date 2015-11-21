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
    console.log(this.state.pictures);
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

    let self = this;

    es.addEventListener('picture', (picture) => {
      let pictureUrl = JSON.parse(picture.data).url;

      let newPictures = self.state.pictures;
      newPictures.forEach(function(pic) {
        pic.isVisible = false;
      });

      newPictures.push({ isVisible: true, url: pictureUrl });

      clearInterval(self.state.intervalHandle);

      self.setState({
        pictures: newPictures
      });

      self.enableSlideshow();
    });
  }

  initialDataIsReady(err, res, body) {
    let pictures = body.pictures.map((pictureId) => { return { isVisible: false, url: `http://partyboard-api.willisite.com/events/${body.slug}/pictures/${pictureId}` }; });

    if (pictures.length > 0) {
      pictures[0].isVisible = true;
    }

    this.setState({
      pictures: pictures
    });

    this.enableSlideshow();
  }

  enableSlideshow() {
    let handle = setInterval(this.showNextPicture.bind(this), 3000);

    this.setState({
      intervalHandle: handle
    });
  }

  showNextPicture() {
    let pictures = this.state.pictures;

    let lastWasVisible = false;

    let lastVisible = -1;
    for (let i = 0; i < pictures.length ; i++) {
      if (pictures[i].isVisible) {
        lastVisible = i;
      }

      pictures[i].isVisible = false;
    }

    let rand = Math.floor(Math.random() * pictures.length)

    while (rand === lastVisible) {
      rand = Math.floor(Math.random() * pictures.length)
    }

    pictures[rand].isVisible = true;

    this.setState({
      pictures: pictures
    });
  }
}

export default Slideshow;
