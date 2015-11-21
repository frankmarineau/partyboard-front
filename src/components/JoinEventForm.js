import React from 'react';
import request from 'request'

class JoinEventForm extends React.Component {
  render() {
    return (
      <div className="field">
        <form className="field__input-btn-wrapper" onSubmit={this.handleSubmit}>
          <div className="field__input-wrapper">
            <input type="text" className="field__input" placeholder="Enter code" name="eventSlug"/>
          </div>
          <button className="field__input-btn btn btn--primary" type="submit"><span className="icon icon--right-arrow"></span></button>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    location = `/#/events/${e.target.eventSlug.value}`;
    e.preventDefault();
    return false;
  }
}

export default JoinEventForm;
