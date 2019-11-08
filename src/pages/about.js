import React from 'react';

import Page from '../components/Page';
import { PROJECTS } from '../data';

const About = () => (
  <Page title="About">
    <div className="row">
      <div className="col-12 col-md-10">
        <h2 className="h3 text-secondary">About</h2>
        <div className="mt-4 text-3">
          <p>
            I was most recently a full-stack software engineer at{' '}
            <a href="https://amino.com/">Amino</a>, helping make it easier for people to find
            affordable healthcare.
          </p>
          <p>
            I'm passionate about building intuitive interfaces. I've published a few React libraries
            to npm&mdash; a <a href={PROJECTS.react_circular_progressbar.github}>progress bar</a>,{' '}
            <a href={PROJECTS.react_calendar_heatmap.github}>heatmap</a>, and{' '}
            <a href={PROJECTS.react_piano.github}>piano</a>. I also help out as a mentor at{' '}
            <a href="https://nodeschool.io/sanfrancisco/">NodeSchool San Francisco</a>, which helps
            people of all backgrounds learn Javascript.
          </p>
          <p>
            I'm also interested in music, machine learning, and climate change prevention. My most
            recent project, <a href={PROJECTS.climatefuture.website}>ClimateFuture</a>, shows people
            the future impact of climate change where they live.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default About;
