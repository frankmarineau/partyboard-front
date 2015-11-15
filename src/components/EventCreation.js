import React from 'react';
import request from 'request'

class EventCreation extends React.Component {
  render() {
    return (
      <form>
        <label>Event title</label>
        <input type="text" placeholder="e.g.: Amy's birthday" name="title"/>

        <label>Event ID</label>
        <input type="text" placeholder="e.g.: amy-birthday" name="slug"/>

        <button type="button" onClick={this.saveEvent.bind(this)}>Save</button>
      </form>
    );
  }

  saveEvent(e) {
    let form = e.target.form;

    request.post({
      url: 'http://partyboard-api.willisite.com/events',
      body: {
        title: form.title.value,
        slug: form.slug.value
      },
      json: true
    }, this.onResponse.bind(this));
  }

  onResponse(err, res, body) {
    location = `/#/events`;
  }
}

export default EventCreation;
