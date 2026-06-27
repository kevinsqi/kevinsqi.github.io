import React from 'react';
import { MdFileDownload, MdStar } from 'react-icons/md';

import { PROJECTS } from '../data';

function Projects({ className }) {
  return (
    <div className={className}>
      <h2 className="h3">Projects</h2>

      <section className="mt-5">
        <Project
          name="PianoHub"
          image="/assets/projects/pianohub.png"
          links={[
            {
              text: 'Github source',
              url: PROJECTS.pianohub.github,
            },
          ]}
        >
          {PROJECTS.pianohub.description}
        </Project>
        <Project
          name="react-circular-progressbar"
          image="/assets/projects/react_circular_progressbar.png"
          badges={[
            {
              text: PROJECTS.react_circular_progressbar.github_stars.toLocaleString(),
              url: PROJECTS.react_circular_progressbar.github,
              IconComponent: MdStar,
            },
            {
              text: PROJECTS.react_circular_progressbar.downloads_total.toLocaleString(),
              url: PROJECTS.react_circular_progressbar.npm,
              IconComponent: MdFileDownload,
            },
          ]}
          links={[{ text: 'Github source', url: PROJECTS.react_circular_progressbar.github }]}
        >
          {PROJECTS.react_circular_progressbar.description}
        </Project>

        <Project
          name="react-calendar-heatmap"
          image="/assets/projects/react_calendar_heatmap.png"
          badges={[
            {
              text: PROJECTS.react_calendar_heatmap.github_stars.toLocaleString(),
              url: PROJECTS.react_calendar_heatmap.github,
              IconComponent: MdStar,
            },
            {
              text: PROJECTS.react_calendar_heatmap.downloads_total.toLocaleString(),
              url: PROJECTS.react_calendar_heatmap.npm,
              IconComponent: MdFileDownload,
            },
          ]}
          links={[{ text: 'Github source', url: PROJECTS.react_calendar_heatmap.github }]}
        >
          {PROJECTS.react_calendar_heatmap.description}
        </Project>

        <Project
          name="react-piano"
          image="/assets/projects/react_piano.png"
          links={[{ text: 'Github source', url: PROJECTS.react_piano.github }]}
          badges={[
            {
              text: PROJECTS.react_piano.github_stars.toLocaleString(),
              url: PROJECTS.react_piano.github,
              IconComponent: MdStar,
            },
          ]}
        >
          {PROJECTS.react_piano.description}
        </Project>

        <Project
          name="microharmonic"
          image="/assets/projects/microharmonic.png"
          links={[
            { text: 'Visit site', url: 'https://www.microharmonic.com' },
            { text: 'Github source', url: PROJECTS.microharmonic.github },
          ]}
        >
          {PROJECTS.microharmonic.description}
        </Project>

        <Project
          name="ClimateFuture"
          image="/assets/projects/climatefuture.png"
          links={[
            {
              text: 'Github source',
              url: PROJECTS.climatefuture.github,
            },
          ]}
        >
          {PROJECTS.climatefuture.description}
        </Project>
      </section>
    </div>
  );
}

const Project = ({ name, image, badges, links, children }) => {
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
        <h3>
          {primaryLink ? (
            <a className="no-underline" href={primaryLink.url}>
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <div className="mt-2">{children}</div>

        {badges && (
          <ul className="list-unstyled mt-3">
            {badges.map(({ text, url, IconComponent }) => (
              <li className="mr-3 d-inline-block" key={url}>
                <a href={url}>
                  <IconComponent className="d-inline-block align-middle" />
                  <span className="d-inline-block align-middle ml-1">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <ul className="list-unstyled mt-3">
          {links.map(({ text, url }) => (
            <li className="mt-1 mr-3 d-inline-block" key={url}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
