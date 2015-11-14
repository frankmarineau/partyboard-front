import React from 'react';

class Minou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: 0
    };
  }

  render() {
    return (
      <h1>{this.state.clock}</h1>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => { this.tick() }, 1000);
  }

  tick() {
    this.setState({clock: this.state.clock + 1});
  }
}

export default Minou;
