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
        </div>
      </div>
    </div>
  );
};
