import React from 'react';
import Page from './Page';

const About = () => (
  <Page>
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div className="text-xs-center">
          <h1>About</h1>
          <img
            src="http://www.gravatar.com/avatar/8192416018e38bce99ad92b85f918ef1?s=200"
            alt="Kevin Qi"
            style={{ width: 150, borderRadius: 150 }}
          />
        </div>

        <h2>TL;DR</h2>
        <ul>
          <li>Currently a senior software engineer at <a href="https://www.patientslikeme.com/">PatientsLikeMe</a>. Previously at <a href="https://panjiva.com/">Panjiva</a>.</li>
          <li>Graduated from Carnegie Mellon University in 2009 with a BS in computer science.</li>
          <li>Lately I've been into React, React Native, frontend development, and data visualization.</li>
        </ul>

        <h2>Contact</h2>
        <p>You can contact me at <a href="mailto:iqnivek@gmail.com">iqnivek@gmail.com</a>.</p>
      </div>
    </div>
  </Page>
);

export default About;
