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
          {links.map(({ text, url }) => <li><a href={url}>{text}</a></li>)}
        </ul>
      </div>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Kevin Qi</h1>

        <h2>Projects</h2>
        <section>
          <Project
            name="EventMapper"
            image="assets/eventmapper.png"
            links={[
              { text: 'View site', url: 'http://eventmapper.net' }
            ]}
          >
            Browsing concert listings can be a mess, so I built a site that maps out concerts ranked by popularity. Built with Rails and the Songkick API.
          </Project>

          <Project
            name="Save Tabbed Images"
            image="assets/save_tabbed_images.png"
            links={[
              { text: 'Github repo', url: 'https://github.com/iqnivek/save_tabbed_images' },
              { text: 'Download in chrome web store', url: 'https://chrome.google.com/webstore/detail/save-tabbed-images/hhcoikfhkkadkgklepjkfgafmjoggefh' },
            ]}
          >
            Open source chrome extension for downloading images in tabs super quick. Built with React and Webpack.
          </Project>
        </section>
      </div>
    );
  }
}

export default App;
