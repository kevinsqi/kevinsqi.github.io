import React from 'react';

import Nav from './Nav';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Page = ({ title, children }) => (
  <Layout>
    <SEO title={title} />
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <Nav />

          <div style={{ marginTop: 60 }}>{children}</div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
