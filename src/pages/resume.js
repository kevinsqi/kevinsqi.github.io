import React from 'react';
import Page from '../components/Page';
import { PROJECTS } from '../data';

const Resume = () => (
  <Page title="Resume">
    <div className="row">
      <div className="col-12 col-12 mb-3">
        <h1>Resume - Kevin Qi</h1>
      </div>

      <div className="col-12 col-sm-8">
        <h2 className="ResumeHeader">Summary</h2>
        <SummarySection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Experience</h2>
        <ExperienceSection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Projects</h2>
        <ProjectsSection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Education</h2>
        <div className="mt-3 mb-5">
          <h3>Carnegie Mellon University</h3>
          <p>B.S. in Computer Science, 2006-2009</p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-4">
        <h2 className="ResumeHeader">Contact</h2>
        <ContactSection
          className="mt-3 mb-5"
          email="iqnivek@gmail.com"
          github="iqnivek"
          website="http://kevinqi.com"
        />

        <h2 className="ResumeHeader">Skills</h2>
        <div className="mt-3 mb-5">
          <ul className="list-unstyled">
            <li>Python</li>
            <li>Ruby on Rails</li>
            <li>NodeJS</li>
            <li>React</li>
            <li>Javascript, ES6, Flow</li>
            <li>PostgreSQL</li>
            <li>Conversant in Mandarin Chinese</li>
          </ul>
        </div>
      </div>
    </div>
  </Page>
);

function SummarySection(props) {
  return (
    <div className={props.className}>
      <p>
        Hi! I'm a full-stack web developer with an affinity for frontend development and design. I
        have 6 years of experience working at web startups, and have helped introduce tech and
        engineering practices such as React, ES6, integration testing, and code review.
      </p>
      <p>
        I always aim to write readable, well-documented and tested code - while still iterating
        quickly. I like to have ownership of a product and take a holistic view beyond coding,
        thinking about things like product impact, A/B testing, and scalable design systems.
      </p>
      <p>
        I'd love to work at a startup or small company where I can help build interesting, impactful
        products.
      </p>
    </div>
  );
}

function ExperienceSection(props) {
  return (
    <div className={props.className}>
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
            <a href={PROJECTS.react_calendar_heatmap.github}>react-calendar-heatmap</a> and{' '}
            <a href="https://github.com/iqnivek/react-circular-progressbar">
              react-circular-progressbar
            </a>.
          </li>
          <li>
            Quickly learned and handled development on{' '}
            <a href={PROJECTS.patientslikeme_app.website}>PLM Connect iOS app</a> for two months,
            adding treatment reports and other features to the app.
          </li>
        </ul>
      </Job>

      <Job name="Freelance web developer" startDate="Apr 2014" endDate="Nov 2014">
        <ul>
          <li>
            Designed and built new websites for clients like{' '}
            <a href="http://www.neurosaveinc.com/">NeuroSave</a>.
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
            Worked on numerous projects on homepage, search, subscription flows, and user dashboard.
            Improved conversion rate of high-traffic public company profiles.
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
            Developed major frontend improvements to an emergency preparedness training application
            built on Ruby on Rails.
          </li>
        </ul>
      </Job>
    </div>
  );
}

function ProjectsSection(props) {
  return (
    <div className={props.className}>
      <h3>react-circular-progressbar</h3>
      <p>
        <a className="text-muted" href={PROJECTS.react_circular_progressbar.github}>
          {PROJECTS.react_circular_progressbar.github}
        </a>
        <br />
        {PROJECTS.react_circular_progressbar.description}
      </p>

      <h3>react-calendar-heatmap</h3>
      <p>
        <a className="text-muted" href={PROJECTS.react_calendar_heatmap.github}>
          {PROJECTS.react_calendar_heatmap.github}
        </a>
        <br />
        {PROJECTS.react_calendar_heatmap.description}
      </p>

      <h3>react-piano</h3>
      <p>
        <a className="text-muted" href={PROJECTS.react_piano.github}>
          {PROJECTS.react_piano.github}
        </a>
        <br />
        {PROJECTS.react_piano.description}
      </p>

      <h3>Save Tabbed Images</h3>
      <p>
        <a className="text-muted" href={PROJECTS.save_tabbed_images.github}>
          {PROJECTS.save_tabbed_images.github}
        </a>
        <br />
        {PROJECTS.save_tabbed_images.description}
      </p>
    </div>
  );
}

function ContactSection({ className, email, github, website }) {
  return (
    <div className={className}>
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
    </div>
  );
}

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

export default Resume;
