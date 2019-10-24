import React from 'react';
import Page from '../components/Page';

const About = () => (
  <Page title="About">
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <h2 className="font-weight-light text-secondary">About //</h2>
        <div className="mt-4 text-3">
          <p>
            I was most recently a full-stack software engineer at{' '}
            <a href="https://amino.com/">Amino</a>, helping make it easier for people to find
            affordable healthcare.
          </p>
          <p>
            I love open source and React and have published a few React libraries to npm&mdash; a{' '}
            <a href="https://github.com/kevinsqi/react-circular-progressbar">progress bar</a>,{' '}
            <a href="https://github.com/patientslikeme/react-calendar-heatmap">heatmap</a>, and{' '}
            <a href="https://github.com/kevinsqi/react-piano">piano</a>. I also help out as a mentor
            at <a href="https://nodeschool.io/sanfrancisco/">NodeSchool San Francisco</a>, which
            helps people of all backgrounds learn Javascript.
          </p>
          <p>
            I'm also interested in music and music software, machine learning applications, and
            climate change prevention and carbon removal.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default About;
