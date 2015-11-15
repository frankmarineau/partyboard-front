import React from 'react';

class Event extends React.Component {
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
    )
  }
}

export default Event;
