import './styles/base';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import About from './js/About';
import App from './js/App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('app'));
