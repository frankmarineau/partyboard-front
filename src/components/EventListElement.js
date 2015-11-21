import React from 'react';

import PhotoUpload from './PhotoUpload'
import SuccessPrompt from './SuccessPrompt'
import Gallery from './Gallery'

class EventListElement extends React.Component {
  render() {
    return (
      <a href={`/#/events/${this.props.event.slug}/slideshow`} className="event">
        <p className="event__title">{this.props.event.title}</p>
        <span className="event__live">Live</span>
        <span className="event__action">View slideshow ›</span>
      </a>
    );
  }

  deleteEvent() {
    request.delete({
      url: `http://partyboard-api.willisite.com/events/${this.props.event.slug}`
    }, this.eventDeleted.bind(this));
  }
}

PhotoUpload.propTypes = {
  event: React.PropTypes.object
};

export default EventListElement;
