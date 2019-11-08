import React from 'react';
import Page from '../components/Page';
import { PROJECTS } from '../data';

const Resume = () => (
  <Page title="Resume" columnClassName="col-12">
    <div className="text-secondary small alert alert-secondary mb-4 hide-for-printing">
      To save this as a PDF, open the Print dialog and select "Save as PDF".
    </div>

    <div className="row">
      <div className="col-12 mb-3">
        <h1 className="h3">Resume - Kevin Qi</h1>
      </div>

      <div className="col-12 col-md-8">
        <h2 className="ResumeHeader">Summary</h2>
        <SummarySection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Experience</h2>
        <ExperienceSection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Selected projects</h2>
        <ProjectsSection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Education</h2>
        <div className="mt-3 mb-5">
          <h3>Carnegie Mellon University</h3>
          <p>B.S. in Computer Science, 3.86/4.0 GPA, 2006-2009</p>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <h2 className="ResumeHeader">Contact</h2>
        <ContactSection
          className="mt-3 mb-5"
          email="iqnivek@gmail.com"
          github="kevinsqi"
          website="https://www.kevinqi.com"
        />

        <h2 className="ResumeHeader">Skills</h2>
        <div className="mt-3 mb-5">
          <ul className="list-unstyled">
            <li>Javascript, Typescript, Flow, NodeJS</li>
            <li>React, Redux</li>
            <li>Python, Flask</li>
            <li>Ruby, Ruby on Rails</li>
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
        I'm a software engineer with 9 years of experience working at web startups. I write
        readable, well-documented and well-tested code while iterating quickly. I'm able to
        contribute holistically to build a great product&mdash;writing specs, doing design, and
        evaluating metrics. I've also built a few open source projects which I currently maintain.
      </p>
      <p>I'm looking to work with driven teams to build impactful products.</p>
    </div>
  );
}

function ExperienceSection(props) {
  return (
    <div className={props.className}>
      <Job name="Amino" position="Senior software engineer" startDate="Jan 2017" endDate="Sep 2019">
        <p>
          Amino provides a search tool to help people to find affordable doctors and hospitals,
          powered by analyzed insurance claims data. Stack: React, Python, Flask, Postgres, Docker.
        </p>
        <ul>
          <li>
            Lead engineer on the HSA banking product built on top of a third-party API provider. Did
            product management, worked closely with API provider, wrote proposals to get team
            buy-in, and helped mentor the HSA team.
          </li>
          <li>
            For HSA, designed and built the transaction reconciliation system, payroll system,
            banking DB schema, ACH transfers, and role-based permissions system. Helped build batch
            file processing system, enrollment processing, and admin tooling to support operations
            like reversals and rollovers.
          </li>
          <li>
            Helped guide and build a scalable design system based on composable CSS utility classes.
            Made frontend more maintainable by improving redux patterns and adopting standard
            libraries like Formik to replace homegrown components.
          </li>
        </ul>
      </Job>
      <Job
        name="PatientsLikeMe"
        position="Senior software engineer"
        startDate="Dec 2014"
        endDate="Aug 2016"
      >
        <p>
          PatientsLikeMe helps people with rare diseases by analyzing their condition and treatment
          data and using it to drive research. Stack: React, Ruby on Rails, Postgres, Swift.
        </p>
        <ul>
          <li>
            Built React frontend for a general-purpose patient interview framework, and wrote dozens
            of other React components.
          </li>
          <li>
            Helped introduce React and usage of ES6, webpack and javascript testing. Gave
            presentations on GraphQL, ES6 best practices, and React.
          </li>
          <li>
            Open-sourced two react components,{' '}
            <a href={PROJECTS.react_calendar_heatmap.github}>react-calendar-heatmap</a> and{' '}
            <a href={PROJECTS.react_circular_progressbar.github}>react-circular-progressbar</a>, as
            part of a health tracking project.
          </li>
          <li>
            Quickly learned and handled development on{' '}
            <a href={PROJECTS.patientslikeme_app.website}>PLM Connect iOS app</a> for two months,
            adding treatment reports and other features to the app.
          </li>
        </ul>
      </Job>

      <Job name="Panjiva" position="Software engineer" startDate="May 2011" endDate="Apr 2014">
        <p>
          Panjiva builds search and company profiles on top of raw shipment data and other sources,
          to help users find reliable global suppliers. Stack: Ruby on Rails, Postgres.
        </p>
        <ul>
          <li>
            Built an interface to visualize Chinese trade data. Worked on numerous projects on
            homepage, search, subscription flows, and user dashboard. Improved conversion rate on
            high-traffic public company profiles.
          </li>
          <li>
            Helped introduce performance monitoring via NewRelic, acceptance testing, easier A/B
            testing, and established a code review process.
          </li>
        </ul>
      </Job>

      <Job
        name="Lockheed Martin (Simulation & Training)"
        position="Software engineer"
        startDate="Jan 2010"
        endDate="May 2011"
      >
        <ul>
          <li>
            Developed major frontend improvements to an emergency preparedness training application
            built with Ruby on Rails.
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
        {PROJECTS.react_circular_progressbar.description}
        <br />
        <a className="small text-muted" href={PROJECTS.react_circular_progressbar.github}>
          {PROJECTS.react_circular_progressbar.github}
        </a>
      </p>

      <h3>react-calendar-heatmap</h3>
      <p>
        {PROJECTS.react_calendar_heatmap.description}
        <br />
        <a className="small text-muted" href={PROJECTS.react_calendar_heatmap.github}>
          {PROJECTS.react_calendar_heatmap.github}
        </a>
      </p>

      <h3>react-piano</h3>
      <p>
        {PROJECTS.react_piano.description}
        <br />
        <a className="small text-muted" href={PROJECTS.react_piano.github}>
          {PROJECTS.react_piano.github}
        </a>
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

function Job({ name, position, startDate, endDate, children }) {
  return (
    <div>
      <h3>{name}</h3>
      <p className="small text-muted">
        {position ? `${position}, ` : null}
        {startDate}
        {endDate ? `–${endDate}` : null}
      </p>

      {children}
    </div>
  );
}

export default Resume;
