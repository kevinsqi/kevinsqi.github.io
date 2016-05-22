import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav className="navbar navbar-dark m-b-2">
    <div className="container">
      <Link to="/" className="navbar-brand stylized">Kevin Qi</Link>

      <div className="nav navbar-nav pull-sm-right stylized">
        <Link to="/about" className="nav-item nav-link">About</Link>
        <a className="nav-item nav-link" href="http://iqnivek.github.io/blog/">Blog</a>
        <a className="nav-item nav-link" href="assets/kevin_qi_resume.pdf">Resume</a>
      </div>
    </div>
  </nav>
);

export default Nav;
