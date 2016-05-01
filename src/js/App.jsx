import '../styles/components/app';

import React from 'react';

const Project = ({ name, image, url, links, children }) => {
  const primaryUrl = links[0].url;
  return (
    <div className="row m-b-1">
      <div className="col-sm-6">
        <div className="text-xs-center">
          <a href={primaryUrl}>
            <img className="img-fluid img-rounded m-b-1" src={image} />
          </a>
        </div>
      </div>
      <div className="col-sm-6">
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
            <a className="navbar-brand" href="/">Kevin Qi</a>
            <div className="nav navbar-nav pull-sm-right">
              <a className="nav-item nav-link" href="http://iqnivek.github.io/blog/">Blog</a>
              <a className="nav-item nav-link" href="https://github.com/iqnivek">Github</a>
              <a className="nav-item nav-link" href="assets/kevin_qi_resume.pdf">Resume <i className="fa fa-file-pdf-o"></i></a>
            </div>
          </div>
        </nav>

        <div className="container">
          <h2 className="m-b-1">Projects</h2>
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
              An embeddable widget for PatientsLikeMe, which shows a quick glimpse of top treatments and side effects for a condition.
            </Project>

            <Project
              name="EventMapper"
              image="assets/eventmapper.png"
              links={[
                { text: 'View site', url: 'http://eventmapper.net' }
              ]}
            >
              A site that puts concerts on a map, ranked by popularity. Built with Rails and the Songkick API.
            </Project>

            <Project
              name="Save Tabbed Images"
              image="assets/save_tabbed_images.png"
              links={[
                { text: 'Github repo', url: 'https://github.com/iqnivek/save_tabbed_images', icon: 'fa-github' },
                { text: 'Download in chrome web store', url: 'https://chrome.google.com/webstore/detail/save-tabbed-images/hhcoikfhkkadkgklepjkfgafmjoggefh', icon: 'fa-chrome' },
              ]}
            >
              Open source chrome extension for downloading images in tabs super quick. Built with React and Webpack.
            </Project>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
