import { FretboardConstants } from '../actions/fretboard_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  numFrets: 13,
  numStrings: 6,
  width: 860,
  height: 215,
  margin: 30
};

const FretboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FretboardConstants.UPDATE_DIMENSIONS:
      let width = action.dimensions.width;
      let height = action.dimensions.height;
      return merge({}, state, { width, height });
    default:
      return state;
  }
};

export default FretboardReducer;
