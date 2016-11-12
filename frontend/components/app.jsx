import React from 'react';
import FretboardContainer from './fretboard/fretboard_container';
import MenuContainer from './menu/menu_container';
import DashboardContainer from './dashboard/dashboard_container';


export const App = ({ children }) => {
  return (
    <div>
      <div className="header">
        <div>Scalable</div>
        <ul className="links">
          <a href="https://mvincent7891.github.io/portfolio/" title="Portfolio"><li className="portfolio"></li></a>
          <a href="https://github.com/mvincent7891" title="GitHub"><li className="github"></li></a>
          <a href="https://www.linkedin.com/in/mvparlato" title="LinkeIn"><li className="linkedin"></li></a>
        </ul>
      </div>
      <div className="component-container">
        <MenuContainer/>
        <div>
          <FretboardContainer/>
          <DashboardContainer/>
          <div className="dashboard-container">
            <p>
              Welcome to Scalable - a project meant to help guitarists build a better mental model of the fretboard.
            </p>
            <p>
              You may find the tuning feature useful. If you like to play in alternate tunings, use this app to visualize familiar scales and chords in those tunings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
