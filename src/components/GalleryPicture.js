import React from 'react';

class GalleryPicture extends React.Component {
  render() {
    return (
      <img src={this.props.url}/>
    );
  }
}

export default GalleryPicture;
