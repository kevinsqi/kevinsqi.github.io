import React from 'react';
import Link from 'gatsby-link';
import Nav from '../components/Nav';

const URLS = {
  EVENTMAPPER_SITE: 'http://eventmapper.net',
  PLM_IOS_APP: 'https://itunes.apple.com/us/app/connect-patientslikeme-control/id955272281',
  REACT_CALENDAR_HEATMAP_GITHUB: 'https://github.com/patientslikeme/react-calendar-heatmap',
  SAVE_TABBED_IMAGES_GITHUB: 'https://github.com/iqnivek/save_tabbed_images',
};

const PROJECTS = {
  EVENTMAPPER:
    'Maps out popular concerts in your city. Personal project built with Rails and the Songkick API.',
  REACT_CALENDAR_HEATMAP:
    "An open source calendar heatmap component inspired by github's contribution graph, available on NPM. Built with React and SVG.",
  SAVE_TABBED_IMAGES:
    'An open source chrome extension for downloading images in tabs super quick, with 6,000+ weekly users. Personal project built with React.',
};

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
    <div className="intro">
      <Nav />

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <p className="mb-3 lead">
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
