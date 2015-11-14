'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Route path="about" component={About}/>
          <Route path="users" component={Users}>
            <Route path="/user/:userId" component={User}/>
          </Route>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}

PartyRouterComponent.displayName = 'PartyRouterComponent';

// Uncomment properties you need
// PartyRouterComponent.propTypes = {};
// PartyRouterComponent.defaultProps = {};

export default PartyRouterComponent;
