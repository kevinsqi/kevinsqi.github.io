import React from 'react';
import Helmet from 'react-helmet';
import Nav from './Nav';

const Page = ({ title, children }) => (
  <div>
    <Helmet
      title={`${title} - Kevin Qi` || 'Kevin Qi'}
    />

    <div className="intro">
      <Nav />
    </div>

    <div className="container">
      {children}
    </div>
  </div>
);

export default Page;
