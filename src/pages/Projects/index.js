import React from 'react';
import { PROJECTS } from '../../data';

import img_react_piano from './react_piano.png';
import img_react_circular_progressbar from './react_circular_progressbar.png';
import img_react_calendar_heatmap from './react_calendar_heatmap.png';
import img_save_tabbed_images from './save_tabbed_images.jpg';
import img_eventmapper from './eventmapper.jpg';
import img_microharmonic from './microharmonic.png';

function Projects({ className }) {
  return (
    <div className={className}>
      <h2 className="h3 text-secondary">Projects</h2>

      <section className="mt-4">
        <Project
          name="react-circular-progressbar"
          image={img_react_circular_progressbar}
          links={[
            { text: 'View project on Github', url: PROJECTS.react_circular_progressbar.github },
          ]}
        >
          {PROJECTS.react_circular_progressbar.description}
        </Project>

        <Project
          name="react-calendar-heatmap"
          image={img_react_calendar_heatmap}
          links={[{ text: 'View project on Github', url: PROJECTS.react_calendar_heatmap.github }]}
        >
          {PROJECTS.react_calendar_heatmap.description}
        </Project>

        <Project
          name="react-piano"
          image={img_react_piano}
          links={[{ text: 'View project on Github', url: PROJECTS.react_piano.github }]}
        >
          {PROJECTS.react_piano.description}
        </Project>

        <Project
          name="microharmonic"
          image={img_microharmonic}
          links={[
            { text: 'View the app', url: 'https://www.microharmonic.com' },
            { text: 'View project on Github', url: PROJECTS.microharmonic.github },
          ]}
        >
          {PROJECTS.microharmonic.description}
        </Project>

        <Project
          name="Save Tabbed Images"
          image={img_save_tabbed_images}
          links={[
            { text: 'View project on Github', url: PROJECTS.save_tabbed_images.github },
            {
              text: 'View extension in Chrome web store',
              url:
                'https://chrome.google.com/webstore/detail/save-tabbed-images/hhcoikfhkkadkgklepjkfgafmjoggefh',
            },
          ]}
        >
          {PROJECTS.save_tabbed_images.description}
        </Project>
      </section>
    </div>
  );
}

const Project = ({ name, image, url, links, children }) => {
  const primaryLink = links[0];
  const img = (
    <img className="img-fluid rounded mb-3" src={image} alt={`${name} project screenshot`} />
  );

  return (
    <div className="row mb-5">
      <div className="col-xs-12 col-sm-5 col-md-4">
        <div className="text-xs-center">
          {primaryLink ? <a href={primaryLink.url}>{img}</a> : img}
        </div>
      </div>
      <div className="col-xs-12 col-sm-7 col-md-8">
        <h3>{primaryLink ? <a href={primaryLink.url}>{name}</a> : name}</h3>
        <div className="mt-2">{children}</div>

        <ul className="list-unstyled mt-3">
          {links.map(({ text, url }) => (
            <li className="mt-1" key={url}>
              <a href={url}>{text} →</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
