import './styles/base';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './js/App';

const About = () => <div>hi yo</div>;

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('app'));
