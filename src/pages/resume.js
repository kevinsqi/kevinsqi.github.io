import React from 'react';
import Page from '../components/Page';
import { PROJECTS, URLS } from '../data';

const Info = ({ email, github, website }) => (
  <ul className="list-unstyled">
    <li>
      Email: <a href={`mailto:${email}`}>{email}</a>
    </li>
    <li>
      Website: <a href={website}>{website}</a>
    </li>
    <li>
      Github: <a href={`https://github.com/${github}`}>@{github}</a>
    </li>
  </ul>
);

const Job = ({ name, position, startDate, endDate, children }) => (
  <div>
    <h3>{name}</h3>
    <p className="text-muted">
      {position ? `${position}, ` : null}
      {startDate}
      {endDate ? `–${endDate}` : null}
    </p>

    {children}
  </div>
);

const Resume = () => (
  <Page title="Resume">
    <div className="row">
      <div className="col-xs-12 mb-2">
        <h1>Kevin Qi</h1>
      </div>

      <div className="col-xs-12 col-sm-8">
        <h2 className="mb-1">Summary</h2>
        <p>
          Hi! I'm a full-stack web developer with an affinity for frontend development and design. I
          have 6 years of experience working at web startups, and have helped introduce tech and
          engineering practices such as React, ES6, integration testing, and code review.
        </p>
        <p>
          I always aim to write readable, well-documented and tested code - while still iterating
          quickly. I like to have ownership of a product and take a holistic view beyond coding,
          thinking about things like A/B testing, analytics, and design.
        </p>
        <p>
          I'd love to work at a startup or small company where I can help build interesting,
          impactful products.
        </p>

        <h2 className="mt-3 mb-1">Experience</h2>
        <Job
          name="PatientsLikeMe"
          position="Senior software engineer"
          startDate="Dec 2014"
          endDate="Aug 2016"
        >
          <ul>
            <li>
              Built React frontend for general-purpose patient interview framework, and wrote dozens
              of other React components.
            </li>
            <li>
              Helped introduce technologies and best practices, including React/ES6/webpack and
              javascript testing. Gave presentations on GraphQL, ES6 best practices, and React.
            </li>
            <li>
              Open-sourced two react components,{' '}
              <a href={URLS.REACT_CALENDAR_HEATMAP_GITHUB}>react-calendar-heatmap</a> and{' '}
              <a href="https://github.com/iqnivek/react-circular-progressbar">
                react-circular-progressbar
              </a>.
            </li>
            <li>
              Quickly learned and handled development on{' '}
              <a href={URLS.PLM_IOS_APP}>PLM Connect iOS app</a> for two months, adding treatment
              reports and other features to the app.
            </li>
          </ul>
        </Job>

        <Job name="Freelance web developer" startDate="Apr 2014" endDate="Nov 2014">
          <ul>
            <li>
              Designed and built new websites for clients like{' '}
              <a href="http://www.neurosaveinc.com/">NeuroSave</a> and{' '}
              <a href="http://bulent.kevinqi.com/">Bulent Guneralp</a>.
            </li>
          </ul>
        </Job>

        <Job name="Panjiva" position="Software engineer" startDate="May 2011" endDate="Apr 2014">
          <ul>
            <li>
              Built a shipment search interface with sophisticated refinements and filtering, and an
              interface to visualize Chinese trade data
            </li>
            <li>
              Helped introduce performance monitoring via NewRelic, acceptance testing, easier A/B
              testing, and established a code review process.
            </li>
            <li>
              Worked on numerous projects on homepage, search, subscription flows, and user
              dashboard. Improved conversion rate of high-traffic public company profiles.
            </li>
          </ul>
        </Job>

        <Job
          name="Lockheed Martin"
          position="Software engineer"
          startDate="Jan 2010"
          endDate="May 2011"
        >
          <ul>
            <li>
              Developed major frontend improvements to an emergency preparedness training
              application built on Ruby on Rails.
            </li>
          </ul>
        </Job>

        <h2 className="mt-3 mb-1">Projects</h2>

        <h3>react-calendar-heatmap</h3>
        <p>
          <a className="text-muted" href={URLS.REACT_CALENDAR_HEATMAP_GITHUB}>
            {URLS.REACT_CALENDAR_HEATMAP_GITHUB}
          </a>
          <br />
          {PROJECTS.REACT_CALENDAR_HEATMAP}
        </p>

        <h3>Save Tabbed Images</h3>
        <p>
          <a className="text-muted" href={URLS.SAVE_TABBED_IMAGES_GITHUB}>
            {URLS.SAVE_TABBED_IMAGES_GITHUB}
          </a>
          <br />
          {PROJECTS.SAVE_TABBED_IMAGES}
        </p>

        <h3>EventMapper</h3>
        <p>
          <a className="text-muted" href={URLS.EVENTMAPPER_SITE}>
            {URLS.EVENTMAPPER_SITE}
          </a>
          <br />
          {PROJECTS.EVENTMAPPER}
        </p>

        <h2 className="mt-3 mb-1">Education</h2>
        <h3>Carnegie Mellon University</h3>
        <p>B.S. in Computer Science, 3.86/4.0 GPA, 2006-2009</p>
      </div>

      <div className="col-xs-12 col-sm-4">
        <h2 className="mb-1">Contact</h2>
        <Info email="iqnivek@gmail.com" github="iqnivek" website="http://kevinqi.com" />

        <h2 className="mt-3 mb-1">Skills</h2>
        <ul className="list-unstyled">
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Javascript, ES6, React</li>
          <li>iOS (Swift)</li>
        </ul>
      </div>
    </div>
  </Page>
);

export default Resume;
