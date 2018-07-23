import React from 'react';
import Page from '../components/Page';

const About = () => (
  <Page title="About">
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <h2 className="font-weight-light text-secondary">About //</h2>
        <div className="mt-4">
          <p>
            Hi, I'm Kevin. Currently a software engineer at <a href="https://amino.com/">Amino</a>;
            formerly at <a href="https://www.patientslikeme.com/">PatientsLikeMe</a> and{' '}
            <a href="https://panjiva.com/">Panjiva</a>.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default About;
