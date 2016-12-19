import { ProgressionConstants } from '../actions/progression_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  playing: false,
  chords: {

  }
};

// Sample progression state:
// {
//   playing: true,
//   chords: {
//     0: {
//       name: "major",
//       root: 3,
//     },
//     1: {
//       name: "minor",
//       root: 0,
//     },
//     2: {
//       name: "major",
//       root: 8,
//     },
//     3: {
//       name: "major_seventh",
//       root: 10,
//     }
//   }
// }

const ProgressionReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProgressionReducer;
