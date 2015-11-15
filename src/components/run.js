import React from 'react';

import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Home from './Home';
import Capture from './Capture';
import EventList from './EventList';
import EventCreation from './EventCreation';
import Slideshow from './Slideshow';

render((
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/events" component={EventList}/>
    <Route path="/events/new" component={EventCreation}/>
    <Route path="/events/:eventSlug" component={Capture}/>
    <Route path="/events/:eventSlug/slideshow" component={Slideshow}/>
  </Router>
), document.getElementById('app'))