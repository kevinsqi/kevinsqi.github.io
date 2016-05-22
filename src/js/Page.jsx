import React from 'react';
import Nav from './Nav';

const Page = ({ children }) => (
  <div>
    <Nav />

    <div className="container">
      {children}
    </div>
  </div>
);

export default Page;
