import React from 'react';
import Nav from './Nav';
import Project from './Project';
import { URLS } from './constants';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <Nav />

          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <p className="mb-3 lead">
                  Software engineer versed in frontend web and design. Based in Boston, MA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
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
                { text: 'Github repo', url: URLS.SAVE_TABBED_IMAGES_GITHUB, icon: 'fa-github' },
                { text: 'Download in chrome web store', url: 'https://chrome.google.com/webstore/detail/save-tabbed-images/hhcoikfhkkadkgklepjkfgafmjoggefh', icon: 'fa-chrome' },
              ]}
            >
              An open source chrome extension for downloading images in tabs super quick, with 4,000+ weekly users. Personal project built with React.
            </Project>

            <Project
              name="EventMapper"
              image="assets/eventmapper.png"
              links={[
                { text: 'View site', url: URLS.EVENTMAPPER_SITE }
              ]}
            >
              A site that puts concerts on a map, ordered by popularity. Personal project built with Rails and the Songkick API.
            </Project>

            <Project
              name="PatientsLikeMe App Treatment Reports"
              image="assets/patientslikeme_connect_treatments.png"
              links={[
                { text: 'View in app store', url: URLS.PLM_IOS_APP, icon: 'fa-apple' }
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
