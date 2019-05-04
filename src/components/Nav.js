import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

const Nav = (props) => (
  <nav className={classNames('display-font hide-for-printing', props.className)}>
    <div className="container">
      <div className="Nav">
        <div className="flex-1">
          <Link to="/" className="NavLink NavBrand text-2 uppercase font-weight-500">
            Kevin&nbsp;Qi
          </Link>
        </div>
        <div className="d-flex">
          <Link to="/" className="NavLink" activeClassName="NavLink--active" exact>
            Home
          </Link>
          <Link to="/about" className="NavLink" activeClassName="NavLink--active" exact>
            About
          </Link>
          <Link to="/resume" className="NavLink" activeClassName="NavLink--active" exact>
            Resume
          </Link>
          <a className="NavLink" href="https://github.com/kevinsqi">
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
