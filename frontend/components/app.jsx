import React from 'react';
import FretboardContainer from './fretboard/fretboard_container';

export const App = ({ children }) => {
  return (
    <div>
      <h2>Scalable - A React/Redux Project</h2>
      <FretboardContainer/>
    </div>
  );
};
