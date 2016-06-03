import React from 'react';
import Page from './Page';
import { URLS } from './constants';

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
    <p className="text-muted">{position ? `${position}, ` : null}{startDate}{endDate ? `–${endDate}` : null}</p>

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

        <h2 className="m-b-2">Experience</h2>
        <Job
          name="PatientsLikeMe"
          position="Senior software engineer"
          startDate="Dec 2014"
          endDate="present"
        >
          <ul>
            <li>Built React frontend for general-purpose patient interview framework, and wrote dozens of other React components.</li>
            <li>Helped introduce React/ES6/webpack infrastructure, and javascript testing.</li>
            <li>Added treatment reports and other features to the <a href={URLS.PLM_IOS_APP}>PLM Connect iOS app</a></li>
          </ul>
        </Job>

        <Job
          name="Freelance web developer"
          startDate="Apr 2014"
          endDate="Nov 2014"
        >
          <ul>
            <li>Designed and built new websites for clients like <a href="http://www.neurosaveinc.com/">NeuroSave</a> and <a href="http://bulent.kevinqi.com/">Bulent Guneralp</a>.</li>
          </ul>
        </Job>

        <Job
          name="Panjiva"
          position="Software engineer"
          startDate="May 2011"
          endDate="Apr 2014"
        >
          <ul>
            <li>Built a shipment search interface with sophisticated refinements and filtering, and an interface to visualize Chinese trade data</li>
            <li>Helped introduce performance monitoring via NewRelic, acceptance testing, easier A/B testing, and established a code review process.</li>
            <li>Numerous projects on homepage, search, subscription flows, and user dashboard. Improved conversion rate of high-traffic public company profiles.</li>
          </ul>
        </Job>

        <Job
          name="Lockheed Martin"
          position="Software engineer"
          startDate="Jan 2010"
          endDate="May 2011"
        >
          <ul>
            <li>Developed major frontend improvements to an emergency preparedness training application built on Ruby on Rails.</li>
            <li>Built a prototype Rails application that allowed playback of weather patterns over time based on public satellite data.</li>
          </ul>
        </Job>

        <h2 className="m-t-3 m-b-2">Projects</h2>
        <h3><a href={URLS.EVENTMAPPER_SITE}>EventMapper</a></h3>
        <p>Maps out popular concerts in your city.</p>

        <h3><a href={URLS.SAVE_TABBED_IMAGES_GITHUB}>Save Tabbed Images</a></h3>
        <p>Chrome extension for downloading images in tabs super quick, with 4,000+ weekly users.</p>

        <h2 className="m-t-3 m-b-2">Education</h2>
        <h3>Carnegie Mellon University</h3>
        <p>BS in Computer Science, 3.86/4.0 GPA, 2006-2009</p>
      </div>

      <div className="col-xs-12 col-sm-4">
        <Info
          email="iqnivek@gmail.com"
          github="iqnivek"
          website="http://kevinqi.com"
        />

        <h2 className="m-t-3 m-b-2">Technologies</h2>
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
