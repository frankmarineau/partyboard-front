import React from 'react';

class GalleryPicture extends React.Component {
  render() {
    return (
      <div className="gallery__item">
        <div className="gallery__inner" style={{backgroundImage: `url('http://partyboard-api.willisite.com/events/${this.props.eventSlug}/pictures/${this.props.pictureId}')`}}></div>
      </div>
    );
  }
}

GalleryPicture.propTypes = {
  eventSlug: React.PropTypes.string,
  pictureId: React.PropTypes.string
};

export default GalleryPicture;
