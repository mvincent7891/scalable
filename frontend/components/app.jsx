import React from 'react';
import FretboardContainer from './fretboard/fretboard_container';
import MenuContainer from './menu/menu_container';
import DashboardContainer from './dashboard/dashboard_container';
import HiddenMessage from './misc/hidden_message';
import SaveContainer from './misc/save_container';

export const App = ({ children }) => {
  return (
    <div>
      <div className="header">
        <div>Scalable</div>
        <ul className="links">
          <a title="Save Session"><li><SaveContainer/></li></a>
          <a href="https://mvincent7891.github.io/portfolio/" title="Michael's Portfolio"><li className="portfolio"></li></a>
          <a href="https://github.com/mvincent7891" title="Michael's GitHub"><li className="github"></li></a>
          <a href="https://www.linkedin.com/in/mvparlato" title="Michael's LinkeIn"><li className="linkedin"></li></a>
        </ul>
      </div>
      <HiddenMessage/>
      <div className="footer">Created by Michael Parlato &#169; 2016</div>
      <div className="component-container">
        <MenuContainer/>
        <div>
          <FretboardContainer/>
          <DashboardContainer/>
          <div className="dashboard-container-BROKEN">

          </div>
        </div>
      </div>
    </div>
  );
};
