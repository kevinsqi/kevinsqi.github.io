import React from 'react';
import Page from './Page';

const Info = ({ email, github, website }) => (
  <ul className="list-unstyled">
    <li><a href={`mailto:${email}`}>{email}</a></li>
    <li>Site: <a href={website}>{website}</a></li>
    <li>Github: <a href={`https://github.com/${github}`}>{github}</a></li>
  </ul>
);

const Job = ({ name, position, startDate, endDate, children }) => (
  <div>
    <h3>{name}</h3>
    <p>{position ? `${position}, ` : null}{startDate}{endDate ? `–${endDate}` : null}</p>

    {children}
  </div>
);

const Resume = () => (
  <Page>
    <div className="row">
      <div className="col-xs-12">
        <h1>Kevin Qi</h1>
      </div>

      <div className="col-xs-12 col-sm-8">

        <h2>Experience</h2>
        <Job
          name="PatientsLikeMe"
          position="Senior software engineer"
          startDate="2014"
          endDate="present"
        >
        </Job>

        <Job
          name="Freelance web developer"
          startDate="April 2014"
          endDate="November 2014"
        >
        </Job>

        <Job
          name="Panjiva"
          position="Software engineer"
          startDate="2011"
          endDate="2014"
        >
        </Job>

        <Job
          name="Lockheed Martin"
          position="Software engineer"
          startDate="2010"
          endDate="2011"
        >
        </Job>

        <h2>Projects</h2>
        <h3>EventMapper</h3>
        <p>Maps out popular concerts in your city.</p>

        <h3>Save Tabbed Images</h3>
        <p>Chrome extension for downloading images in tabs super quick.</p>

        <h2>Education</h2>
        <h3>Carnegie Mellon University</h3>
        <p>BS in Computer Science, 3.86/4.0 GPA, 2006-2009</p>
      </div>

      <div className="col-xs-12 col-sm-4">
        <Info
          email="iqnivek@gmail.com"
          github="iqnivek"
          website="http://kevinqi.com"
        />

        <h2>Technologies</h2>
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
