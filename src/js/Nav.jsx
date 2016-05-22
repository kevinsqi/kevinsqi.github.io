import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-dark m-b-2">
    <div className="container">
      <a className="navbar-brand stylized" href="/">
        Kevin Qi
      </a>
      <div className="nav navbar-nav pull-sm-right stylized">
        <a className="nav-item nav-link" href="http://iqnivek.github.io/blog/">Blog</a>
        <a className="nav-item nav-link" href="https://github.com/iqnivek">Github</a>
        <a className="nav-item nav-link" href="assets/kevin_qi_resume.pdf">Resume</a>
      </div>
    </div>
  </nav>
);

export default Nav;
