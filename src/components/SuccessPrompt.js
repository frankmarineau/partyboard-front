import React from 'react';

class SuccessPrompt extends React.Component {
  render() {
    return (
      <div className={`modal${this.props.open ? " modal--open" : ""}`}>
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

SuccessPrompt.propTypes = {
  message: React.PropTypes.string,
  open: React.PropTypes.bool
};

export default SuccessPrompt;
