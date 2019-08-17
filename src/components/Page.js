import React from 'react';

import Nav from './Nav';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const Page = ({ title, children }) => (
  <Layout>
    <SEO title={title} />

    <div className="intro py-4">
      <Nav />
    </div>

    <div className="container">
      <div className="pt-5">{children}</div>
    </div>
  </Layout>
);

export default Page;
