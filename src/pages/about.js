import React from 'react';
import Page from '../components/Page';

const About = () => (
  <Page title="About">
    <div className="row">
      <div className="col-xs-12 col-md-6 offset-md-3">
        <h1 className="mb-2">About</h1>

        <p>
          Hi, I'm Kevin. Currently a software engineer at <a href="https://amino.com/">Amino</a>;
          formerly at <a href="https://www.patientslikeme.com/">PatientsLikeMe</a> and{' '}
          <a href="https://panjiva.com/">Panjiva</a>. I graduated from Carnegie Mellon University in
          2009 with a degree in computer science.
        </p>
        <p>In my spare time I like to play videogames, cook, run, and play guitar.</p>
      </div>
    </div>
  </Page>
);

export default About;
