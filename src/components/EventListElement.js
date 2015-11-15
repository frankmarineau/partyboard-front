import React from 'react';

import PhotoUpload from './PhotoUpload'
import SuccessPrompt from './SuccessPrompt'
import Gallery from './Gallery'

class EventListElement extends React.Component {
  render() {
    return (
      <div className="event-item">
        <h3 className="event-item__title">{this.props.event.title} ({this.props.event.slug})</h3>
        <a href="#" className="event-item__action" onClick={this.deleteEvent.bind(this)}>x</a>
        <a href={`/#/events/${this.props.event.slug}/slideshow`} className="event-item__action">Slideshow</a>
      </div>
    );
  }

  deleteEvent() {
    request.delete({
      url: `http://partyboard-api.willisite.com/events/${this.props.event.slug}`
    }, this.eventDeleted.bind(this));
  }

  eventDeleted() {
    // TODO
  }
}

PhotoUpload.propTypes = {
  event: React.PropTypes.object
};

export default EventListElement;
