import React from 'react';
import $ from 'jquery'

class PhotoUpload extends React.Component {

  render() {
    return (
      <form>
        <input id="allo" type="file" accept="image/*;capture=camera" name="picture" onChange={this.pictureChanged.bind(this)}/>
      </form>
    );
  }

  pictureChanged(e) {
    let pictureFile = e.target.files[0];

    var data = new FormData();
    $.each($('#allo')[0].files, function(i, file) {
      data.append('file-'+i, file);
    });

    $.ajax({
      url: `http://partyboard-api.willisite.com/events/${this.props.eventSlug}/pictures`,
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST',
      success: this.props.onUpload
    });
  }
}

PhotoUpload.propTypes = {
  onUpload: React.PropTypes.func,
  eventSlug: React.PropTypes.string
};

export default PhotoUpload;
