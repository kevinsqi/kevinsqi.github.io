import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

const Nav = (props) => (
  <nav className={classNames('display-font hide-for-printing', props.className)}>
    <div className="Nav">
      <div className="flex-1">
        <Link to="/" className="NavLink NavBrand display-font text-2 font-weight-500">
          Kevin Qi
        </Link>
      </div>
      <div className="d-flex display-font">
        <Link to="/" className="NavLink display-font" activeClassName="NavLink--active" exact>
          Home
        </Link>
        {/*
          <a href={'/assets/resume/resume_kevin_qi.pdf'} className="NavLink display-font">
            Resume
          </a>
          */}
        <Link to="/blog" className="NavLink display-font" activeClassName="NavLink--active" exact>
          Blog
        </Link>
        <a href="https://www.linkedin.com/in/kevin-qi-25b76710/" className="NavLink display-font">
          LinkedIn
        </a>
        <a className="NavLink display-font" href="https://github.com/kevinsqi">
          Github
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
