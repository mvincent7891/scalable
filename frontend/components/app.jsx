import React from 'react';
import FretboardContainer from './fretboard/fretboard_container';
import MenuContainer from './menu/menu_container';


export const App = ({ children }) => {
  return (
    <div>
      <div className="header">Scalable</div>
      <div className="component-container">
        <MenuContainer/>
        <FretboardContainer/>
      </div>
    </div>
  );
};
