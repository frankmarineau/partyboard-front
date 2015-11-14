import React from 'react';

import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Home from './Home';
import Capture from './Capture';

render((
  <Router>
    <Route path="/" component={Home}>
      <Route path="events/:slug/capture" component={Capture}/>
    </Route>
  </Router>
), document.getElementById('app'))