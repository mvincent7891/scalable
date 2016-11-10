import React from 'react';
import FretboardContainer from './fretboard/fretboard_container';
import MenuContainer from './menu/menu_container';
import DashboardContainer from './dashboard/dashboard_container';


export const App = ({ children }) => {
  return (
    <div>
      <div className="header">Scalable</div>
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
