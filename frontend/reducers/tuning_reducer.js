import { TuningConstants } from '../actions/tuning_actions.js';
import merge from 'lodash/merge';


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

const TuningReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TuningConstants.UPDATE_TUNING_BY_NOTES:
      const tuning = action.tuning;
      return merge({}, state, tuning);
    case TuningConstants.UPDATE_TUNING:
      const tuningName = action.tuning;
      return merge({}, state, tuningName);
    case TuningConstants.RESET_TUNING:
      return defaultState;
    case TuningConstants.UPDATE_NOTE:
      const note = action.note;
      const idx = action.idx;
      return merge({}, state, {[idx]: note});
    default:
      return state;
  }
};

export default TuningReducer;
