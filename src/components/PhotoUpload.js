import React from 'react';
import $ from 'jquery'

class PhotoUpload extends React.Component {

  render() {
    return (
      <div className="fab" onClick={this.clickInput.bind(this)}>
        <span className="fab__icon icon icon--photo"></span>
        <input id="file-input" type="file" accept="image/*;capture=camera" name="picture" onChange={this.pictureChanged.bind(this)}/>
      </div>
    );
  }

  pictureChanged(e) {
    let pictureFile = e.target.files[0];

    var data = new FormData();
    $.each($('#file-input')[0].files, function(i, file) {
      data.append('file-'+i, file);
    });

    $.ajax({
      url: `http://partyboard-api.willisite.com/events/${this.props.eventSlug}/pictures/`,
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST',
      success: this.props.onUpload
    });
  }

  clickInput() {
    $('#file-input').click();
  }
}

PhotoUpload.propTypes = {
  onUpload: React.PropTypes.func,
  eventSlug: React.PropTypes.string
};

export default PhotoUpload;
