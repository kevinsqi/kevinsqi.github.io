import React from 'react';

import Page from '../components/Page';
import Projects from '../components/Projects';

const IndexPage = () => (
  <Page>
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
