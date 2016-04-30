import '../styles/components/app';

import React from 'react';

const Project = ({ name, image, url, children }) => (
  <div className="row m-b-1">
    <div className="col-sm-6">
      <div className="text-xs-center">
        <img className="img-fluid img-rounded" src={image} />
      </div>
    </div>
    <div className="col-sm-6">
      <h2>{name}</h2>
      {children}
    </div>
  </div>
);

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
          >
            Browsing concert listings can be a mess, so I built a site that maps out concerts ranked by popularity. Built on Rails and uses the Songkick API.
          </Project>

          <Project
            name="Save Tabbed Images"
            image="assets/save_tabbed_images.png"
          >
            Open source chrome extension for downloading images in tabs super quick. Built with react and webpack.
          </Project>
        </section>
      </div>
    );
  }
}

export default App;
