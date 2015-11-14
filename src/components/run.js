import React from 'react';

import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import App from './Main';
import Minou from './Minou';

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={Minou}/>
    </Route>
  </Router>
), document.getElementById('app'))