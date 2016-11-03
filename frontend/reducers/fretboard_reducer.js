import { FretboardConstants } from '../actions/fretboard_actions.js';

const defaultState = {
  numFrets: 13,
  numStrings: 6
};

const FretboardReducer = (state = [], action) => {

  let newState;
  switch (action.type) {
    default:
      return defaultState;
  }
};

export default FretboardReducer;
