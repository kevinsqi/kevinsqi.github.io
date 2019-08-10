import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

const Nav = (props) => (
  <nav className={classNames('display-font hide-for-printing', props.className)}>
    <div className="container">
      <div className="Nav">
        <div className="flex-1">
          <Link to="/" className="NavLink NavBrand display-font text-2 uppercase font-weight-500">
            Kevin&nbsp;Qi
          </Link>
        </div>
        <div className="d-flex display-font">
          <Link to="/" className="NavLink display-font" activeClassName="NavLink--active" exact>
            Home
          </Link>
          <Link
            to="/about"
            className="NavLink display-font"
            activeClassName="NavLink--active"
            exact
          >
            About
          </Link>
          <Link
            to="/resume"
            className="NavLink display-font"
            activeClassName="NavLink--active"
            exact
          >
            Resume
          </Link>
          <a className="NavLink display-font" href="https://github.com/kevinsqi">
            Github
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
