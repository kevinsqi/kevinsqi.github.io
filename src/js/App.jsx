import '../styles/components/app';

import React from 'react';

const Project = ({ name, image, url, children }) => (
  <div className="row">
    <div className="col-sm-6">
      <img className="img-fluid" src={image} />
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

        <Project
          name="EventMapper"
          image="assets/eventmapper.png"
        >
          Browsing concert listings can be a mess, so I built a site that maps out concerts ranked by popularity. When you're in a city with a lot going on, it's a lot easier to find the right show.
        </Project>
      </div>
    );
  }
}

export default App;
