import { TuningConstants } from '../actions/tuning_actions.js';

// A A# B C C# D D# E F F# G  G#
// 0 1  2 3 4  5 6  7 8 9  10 11

const defaultState = {
  0: 7,
  1: 2,
  2: 10,
  3: 5,
  4: 0,
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
