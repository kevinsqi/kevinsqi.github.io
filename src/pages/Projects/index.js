import React from 'react';
import { PROJECTS, URLS } from '../../data';

import img_react_calendar_heatmap from './react_calendar_heatmap.png';
import img_save_tabbed_images from './save_tabbed_images.png';
import img_patientslikeme_app from './patientslikeme_app.png';
import img_eventmapper from './eventmapper.png';

const Projects = () => {
  return (
    <div>
      <h2 className="font-weight-light">Projects</h2>

      <section>
        <Project
          name="react-calendar-heatmap"
          image={img_react_calendar_heatmap}
          links={[
            { text: 'Github repo', url: URLS.REACT_CALENDAR_HEATMAP_GITHUB },
            { text: 'Demo page', url: 'http://patientslikeme.github.io/react-calendar-heatmap/' },
          ]}
        >
          {PROJECTS.REACT_CALENDAR_HEATMAP}
        </Project>

        <Project
          name="Save Tabbed Images"
          image={img_save_tabbed_images}
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
          name="EventMapper"
          image={img_eventmapper}
          links={[{ text: 'View site', url: URLS.EVENTMAPPER_SITE }]}
        >
          {PROJECTS.EVENTMAPPER}
        </Project>

        <Project
          name="PatientsLikeMe App Treatment Reports"
          image={img_patientslikeme_app}
          links={[{ text: 'View in app store', url: URLS.PLM_IOS_APP }]}
        >
          I worked on adding treatment reports to the native PatientsLikeMe iOS app. The reports
          have useful info on cost, effectiveness, side effects, and patient evaluations. Built with
          Swift.
        </Project>
      </section>
    </div>
  );
};

const Project = ({ name, image, url, links, children }) => {
  const primaryUrl = links[0].url;
  return (
    <div className="row mb-5">
      <div className="col-xs-12 col-sm-6">
        <div className="text-xs-center">
          <a href={primaryUrl}>
            <img className="img-fluid rounded mb-3" src={image} />
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

export default Projects;
