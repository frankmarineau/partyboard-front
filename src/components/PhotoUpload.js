import React from 'react';
import request from 'request'

class PhotoUpload extends React.Component {

  render() {
    return (
      <form>
        <input type="file" accept="image/*;capture=camera" name="picture" onChange={this.pictureChanged.bind(this)}/>
      </form>
    );
  }

  pictureChanged(e) {
    let pictureInput = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = this.pictureReady.bind(this);

    reader.readAsBinaryString(pictureInput);
  }

  pictureReady(e) {
    request.post({
      url: `http://jsonplaceholder.typicode.com/users`,
      body: e.target.result
    }, this.props.onUpload);
  }
}

PhotoUpload.propTypes = {
  onUpload: React.PropTypes.func,
  eventSlug: React.PropTypes.string
};

export default PhotoUpload;
