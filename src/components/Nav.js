import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

const Nav = (props) => (
  <nav className={classNames('display-font', props.className)}>
    <div className="container">
      <div className="Nav">
        <div className="flex-1">
          <Link to="/" className="NavLink text-1">
            Kevin Qi
          </Link>
        </div>

        <div className="d-flex">
          <Link to="/about" className="NavLink" activeClassName="NavLink--active">
            About
          </Link>
          <Link to="/resume" className="NavLink" activeClassName="NavLink--active">
            Resume
          </Link>
          <a className="NavLink" href="https://github.com/iqnivek">
            Github
          </a>
          <a className="NavLink" href="https://medium.com/@kevin_qi">
            Blog
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
