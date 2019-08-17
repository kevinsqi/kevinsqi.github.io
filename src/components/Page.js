import React from 'react';
import Helmet from 'react-helmet';

import Nav from './Nav';
import Layout from '../components/Layout';

const Page = ({ title, children }) => (
  <Layout>
    <Helmet title={`${title} - Kevin Qi` || 'Kevin Qi'} />

    <div className="intro py-4">
      <Nav />
    </div>

    <div className="container">
      <div className="pt-5">{children}</div>
    </div>
  </Layout>
);

export default Page;
