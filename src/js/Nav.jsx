import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav className="navbar navbar-dark m-b-2">
    <div className="container">
      <Link to="/" className="navbar-brand">Kevin Qi</Link>

      <div className="nav navbar-nav pull-xs-right">
        <Link to="/about" className="nav-item nav-link" activeClassName="active">About</Link>
        <Link to="/resume" className="nav-item nav-link" activeClassName="active">Resume</Link>
        <a className="nav-item nav-link" href="http://iqnivek.github.io/blog/">Blog</a>
      </div>
    </div>
  </nav>
);

export default Nav;
