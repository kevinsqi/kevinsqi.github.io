import React from 'react';
import { MdFileDownload, MdStar } from 'react-icons/md';

import { PROJECTS } from '../../data';
import img_react_piano from './react_piano.png';
import img_react_circular_progressbar from './react_circular_progressbar.png';
import img_react_calendar_heatmap from './react_calendar_heatmap.png';
import img_microharmonic from './microharmonic.png';
import img_climatefuture from './climatefuture.png';
import img_pianohub from './pianohub.png';

const ITEMS = [
  {
    name: 'PianoHub',
    image: img_pianohub,
    url: PROJECTS.pianohub.website,
    project: PROJECTS.pianohub,
  },
  {
    name: 'react-circular-progressbar',
    image: img_react_circular_progressbar,
    url: PROJECTS.react_circular_progressbar.github,
    project: PROJECTS.react_circular_progressbar,
  },
  {
    name: 'react-calendar-heatmap',
    image: img_react_calendar_heatmap,
    url: PROJECTS.react_calendar_heatmap.github,
    project: PROJECTS.react_calendar_heatmap,
  },
  {
    name: 'react-piano',
    image: img_react_piano,
    url: PROJECTS.react_piano.github,
    project: PROJECTS.react_piano,
  },
  {
    name: 'microharmonic',
    image: img_microharmonic,
    url: 'https://www.microharmonic.com',
    project: PROJECTS.microharmonic,
  },
  {
    name: 'ClimateFuture',
    image: img_climatefuture,
    url: PROJECTS.climatefuture.github,
    project: PROJECTS.climatefuture,
  },
];

function Projects({ className }) {
  return (
    <section className={className}>
      <h2 className="sr-only">Projects</h2>
      <div className="ProjectGrid">
        {ITEMS.map((item) => (
          <Project key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

const Project = ({ name, image, url, project }) => {
  const { tagline, github_stars, downloads_total } = project;

  return (
    <a className="Project" href={url}>
      <img className="Project-image" src={image} alt="" />
      <div className="Project-text">
        <p className="Project-description">
          <b className="Project-name">{name}:</b> {tagline}
        </p>
        {github_stars && (
          <div className="Project-stats">
            <Stat IconComponent={MdStar} label="Github stars" value={github_stars} />
            {downloads_total && (
              <Stat IconComponent={MdFileDownload} label="npm downloads" value={downloads_total} />
            )}
          </div>
        )}
      </div>
    </a>
  );
};

const Stat = ({ IconComponent, label, value }) => (
  <span className="Project-stat">
    <IconComponent aria-hidden="true" />
    <span className="sr-only">{label}: </span>
    {value.toLocaleString()}
  </span>
);

export default Projects;
