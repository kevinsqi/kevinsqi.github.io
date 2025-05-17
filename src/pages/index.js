import React from 'react';
import Projects from './Projects';
import Page from '../components/Page';

const IndexPage = () => (
  <Page title="Home">
    <div className="row text-2">
      <div className="col-12">
        <p>
          I currently work on ML infra and product engineering at{' '}
          <a href="https://www.gridmatic.com">Gridmatic</a>, a startup trying to speed up the
          adoption of renewable energy on the grid.
        </p>
      </div>
    </div>
    <hr className="mt-5" />
    <Projects className="mt-5" />
  </Page>
);

export default IndexPage;
