import React from 'react';

import PhotoUpload from './PhotoUpload'
import SuccessPrompt from './SuccessPrompt'
import Gallery from './Gallery'

class EventDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.pictures.map((picture, i) => {
          return (
            <img src={picture} key={i}></img>
          )})
        }
      </div>
    );
  }
}

export default EventDetails;
