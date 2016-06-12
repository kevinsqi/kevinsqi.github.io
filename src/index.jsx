import './styles';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import About from './About';
import App from './App';
import Resume from './Resume';

// remove ?_k= param from hashHistory
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
  </Router>
), document.getElementById('app'));
