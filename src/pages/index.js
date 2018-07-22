import React from 'react';
import Link from 'gatsby-link';
import Nav from '../components/Nav';
import { PROJECTS, URLS } from '../data';

const Project = ({ name, image, url, links, children }) => {
  const primaryUrl = links[0].url;
  return (
    <div className="row mb-1">
      <div className="col-xs-12 col-sm-6">
        <div className="text-xs-center">
          <a href={primaryUrl}>
            <img className="img-fluid rounded mb-1" src={image} />
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
        <h3>
          <a href={primaryUrl}>{name}</a>
        </h3>
        {children}

        <ul className="list-unstyled mt-1">
          {links.map(({ text, url }) => (
            <li key={url}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const IndexPage = () => (
  <div>
    <div className="intro py-5">
      <Nav className="mb-6" />

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <p className="font-weight-light text-1 mb-0">
              Software engineer versed in web and design. Based in San Francisco.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-3">
      <h2 className="mb-2">Projects</h2>

      <section>
        <Project
          name="react-calendar-heatmap"
          image="assets/react_calendar_heatmap.png"
          links={[
            { text: 'Github repo', url: URLS.REACT_CALENDAR_HEATMAP_GITHUB },
            { text: 'Demo page', url: 'http://patientslikeme.github.io/react-calendar-heatmap/' },
          ]}
        >
          {PROJECTS.REACT_CALENDAR_HEATMAP}
        </Project>

        <Project
          name="EventMapper"
          image="assets/eventmapper.png"
          links={[{ text: 'View site', url: URLS.EVENTMAPPER_SITE }]}
        >
          {PROJECTS.EVENTMAPPER}
        </Project>

        <Project
          name="Save Tabbed Images"
          image="assets/save_tabbed_images.png"
          links={[
            { text: 'Github repo', url: URLS.SAVE_TABBED_IMAGES_GITHUB },
            {
              text: 'Download in chrome web store',
              url:
                'https://chrome.google.com/webstore/detail/save-tabbed-images/hhcoikfhkkadkgklepjkfgafmjoggefh',
            },
          ]}
        >
          {PROJECTS.SAVE_TABBED_IMAGES}
        </Project>

        <Project
          name="patientslikeme.com/embed"
          image="assets/patientslikeme_embed.png"
          links={[{ text: 'View site', url: 'https://www.patientslikeme.com/embed' }]}
        >
          An embeddable widget for PatientsLikeMe, which shows a quick glimpse of top treatments and
          side effects for a condition. Built with React.
        </Project>

        <Project
          name="PatientsLikeMe App Treatment Reports"
          image="assets/patientslikeme_connect_treatments.png"
          links={[{ text: 'View in app store', url: URLS.PLM_IOS_APP }]}
        >
          I worked on adding treatment reports to the native PatientsLikeMe iOS app. The reports
          have useful info on cost, effectiveness, side effects, and patient evaluations. Built with
          Swift.
        </Project>
      </section>
    </div>
  </div>
);

export default IndexPage;
