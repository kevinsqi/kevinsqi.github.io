import '../styles/components/app';

import React from 'react';

const Project = ({ name, image, url, links, children }) => {
  const primaryUrl = links[0].url;
  return (
    <div className="row m-b-1">
      <div className="col-xs-12 col-sm-6">
        <div className="text-xs-center">
          <a href={primaryUrl}>
            <img className="img-fluid img-rounded m-b-1" src={image} />
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
        <h3><a href={primaryUrl}>{name}</a></h3>
        {children}

        <ul className="list-unstyled m-t-1">
          {links.map(({ text, url, icon }) => <li key={url}><i className={`text-muted fa ${icon || 'fa-external-link'}`} style={{ width: '1em', marginRight: '0.3em' }}></i> <a href={url}>{text}</a></li>)}
        </ul>
      </div>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark m-b-2">
          <div className="container">
            <a className="navbar-brand stylized" href="/">
              Kevin Qi
            </a>
            <div className="nav navbar-nav pull-sm-right stylized">
              <a className="nav-item nav-link" href="http://iqnivek.github.io/blog/">Blog</a>
              <a className="nav-item nav-link" href="https://github.com/iqnivek">Github</a>
              <a className="nav-item nav-link" href="assets/kevin_qi_resume.pdf">Resume</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <p className="m-b-2 text-muted">
            Hello! I'm a developer that likes to think deeply about product and design. I've done a lot of work in Rails and React, and some work with native iOS apps. Here are some projects I've worked on:
          </p>
          <hr className="m-b-2" />
          <section>
            <Project
              name="react-calendar-heatmap"
              image="assets/react_calendar_heatmap.png"
              links={[
                { text: 'Github repo', url: 'https://github.com/patientslikeme/react-calendar-heatmap', icon: 'fa-github' },
                { text: 'Demo page', url: 'http://patientslikeme.github.io/react-calendar-heatmap/' },
              ]}
            >
              An open source calendar heatmap component inspired by github's contribution graph, available on NPM. Built with React and SVG.
            </Project>

            <Project
              name="patientslikeme.com/embed"
              image="assets/patientslikeme_embed.png"
              links={[
                { text: 'View site', url: 'https://www.patientslikeme.com/embed' }
              ]}
            >
              An embeddable widget for PatientsLikeMe, which shows a quick glimpse of top treatments and side effects for a condition. Built with React.
            </Project>

            <Project
              name="Save Tabbed Images"
              image="assets/save_tabbed_images.png"
              links={[
                { text: 'Github repo', url: 'https://github.com/iqnivek/save_tabbed_images', icon: 'fa-github' },
                { text: 'Download in chrome web store', url: 'https://chrome.google.com/webstore/detail/save-tabbed-images/hhcoikfhkkadkgklepjkfgafmjoggefh', icon: 'fa-chrome' },
              ]}
            >
              An open source chrome extension for downloading images in tabs super quick. Personal project built with React.
            </Project>

            <Project
              name="EventMapper"
              image="assets/eventmapper.png"
              links={[
                { text: 'View site', url: 'http://eventmapper.net' }
              ]}
            >
              A site that puts concerts on a map, ordered by popularity. Personal project built with Rails and the Songkick API.
            </Project>

            <Project
              name="PatientsLikeMe App Treatment Reports"
              image="assets/patientslikeme_connect_treatments.png"
              links={[
                { text: 'View in app store', url: 'https://itunes.apple.com/us/app/connect-patientslikeme-control/id955272281', icon: 'fa-apple' }
              ]}
            >
              I worked on adding treatment reports to the native PatientsLikeMe iOS app. The reports have useful info on cost, effectiveness, side effects, and patient evaluations. Built with Swift.
            </Project>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
