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
            helping make it easier to find affordable healthcare.
          </p>
          <p>
            I'm enthusiastic about creating new visual tools and contributing to open source. I love
            React and I've created two small libraries on npm,{' '}
            <a href="https://github.com/iqnivek/react-circular-progressbar">
              react-circular-progressbar
            </a>{' '}
            and{' '}
            <a href="https://github.com/patientslikeme/react-calendar-heatmap">
              react-calendar-heatmap
            </a>. Lately, I've been working on two music projects based on React,{' '}
            <a href="https://github.com/iqnivek/react-piano">react-piano</a> and{' '}
            <a href="https://github.com/iqnivek/microharmonic">microharmonic</a>. I've also helped
            out as a mentor at{' '}
            <a href="https://nodeschool.io/sanfrancisco/">NodeSchool San Francisco</a>, which helps
            people learn Javascript.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default About;
