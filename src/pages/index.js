import React from 'react';
import Projects from './Projects';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro pt-5 pb-5">
      <Nav />
      <div className="container" style={{ marginTop: 150 }}>
        <div className="row">
          <div className="col-xs-12 col-sm-10">
            <p className="display-font font-weight-light text-1 mb-0">
              Software engineer interested in open source and building intuitive interfaces. Based
              in San Francisco.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <Projects />
    </div>
  </Layout>
);

export default IndexPage;
