import { TuningConstants } from '../actions/tuning_actions.js';

// A A# B C C# D D# E F F# G  G#
// 0 1  2 3 4  5 6  7 8 9  10 11

const defaultState = {
  0: 7,
  1: 0,
  2: 5,
  3: 10,
  4: 2,
  5: 7
};

const TuningReducer = (state = [], action) => {

  let newState;
  switch (action.type) {
    default:
      return defaultState;
  }
};

export default TuningReducer;
