import React from 'react';
import Nav from './Nav';

const Page = ({ children }) => (
  <div>
    <div className="intro">
      <Nav />
    </div>

    <div className="container">
      {children}
    </div>
  </div>
);

export default Page;
