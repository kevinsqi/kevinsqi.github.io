import React from 'react';
import Link from 'gatsby-link';

const Nav = () => (
  <nav className="navbar navbar-dark mb-2">
    <div className="container">
      <Link to="/" className="navbar-brand">
        Kevin Qi
      </Link>

      <div className="nav navbar-nav float-xs-right">
        <Link to="/about" className="nav-item nav-link" activeClassName="active">
          About
        </Link>
        <Link to="/resume" className="nav-item nav-link" activeClassName="active">
          Resume
        </Link>
        <a className="nav-item nav-link" href="https://medium.com/@kevin_qi">
          Blog
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
