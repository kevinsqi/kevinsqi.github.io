import React from 'react';
import Page from '../components/Page';

const About = () => (
  <Page title="About">
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <h2 className="font-weight-light text-secondary">About //</h2>
        <div className="mt-4 display-font text-3">
          <p>
            I'm currently a full-stack software engineer at <a href="https://amino.com/">Amino</a>,
            helping make it easier for people to find affordable healthcare.
          </p>
          <p>
            I love working with React and I've published a few React libraries to npm &mdash;{' '}
            <a href="https://github.com/kevinsqi/react-circular-progressbar">
              react-circular-progressbar
            </a>
            ,{' '}
            <a href="https://github.com/patientslikeme/react-calendar-heatmap">
              react-calendar-heatmap
            </a>, and <a href="https://github.com/kevinsqi/react-piano">react-piano</a>
            . I've also helped out as a mentor at{' '}
            <a href="https://nodeschool.io/sanfrancisco/">NodeSchool San Francisco</a>, which helps
            people learn Javascript.
          </p>
          <p>
            I dabble in music as a hobby. I used to play trombone, but nowadays opt for the more
            considerate piano and guitar. Lately, I've been learning about microtonal music and have
            been working on a{' '}
            <a href="https://github.com/kevinsqi/microharmonic">microtonal keyboard app</a>.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default About;
