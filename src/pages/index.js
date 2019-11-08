import React from 'react';
import Projects from './Projects';
import Page from '../components/Page';

const IndexPage = () => (
  <Page title="Home">
    <div className="h2 font-weight-bold">Kevin Qi</div>
    <p className="text-2">
      Developer and open source contributor.
      <br />
      Based in San Francisco.
    </p>
    <hr className="mt-5" />
    <Projects className="mt-5" />
  </Page>
);

export default IndexPage;
