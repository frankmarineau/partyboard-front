import React from 'react';

import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Home from './Home';
import Event from './Event';

render((
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/events/:eventSlug" component={Event}/>
  </Router>
), document.getElementById('app'))