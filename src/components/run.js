import React from 'react';

import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Home from './Home';
import EventList from './EventList';

render((
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/events/:eventSlug" component={EventList}/>
  </Router>
), document.getElementById('app'))