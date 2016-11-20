import { ProgressionConstants } from '../actions/progression_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  playing: false,
  chords: {

  }
};

const ProgressionReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProgressionReducer;
