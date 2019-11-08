import React from 'react';
import Projects from './Projects';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <Nav />

          <div style={{ marginTop: 60 }}>
            <div className="h2 font-weight-bold">Kevin Qi</div>
            <p className="text-2">
              Developer and open source contributor.
              <br />
              Based in San Francisco.
            </p>
          </div>
          <hr className="mt-5" />

          <Projects className="mt-5" />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
