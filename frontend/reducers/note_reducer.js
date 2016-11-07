import { NoteConstants } from '../actions/note_actions.js';

const defaultState = {
  // TODO: Refactor into new redux loop
  scale: {
    root: 0,
    name: 'natural_minor'
  },
  // TODO: Refactor into new redux loop
  chord: {
    root: 3,
    name: 'major'
  }
};

const NoteReducer = (state = defaultState, action) => {

  switch (action.type) {
    case NoteConstants.RECEIVE_NOTES:
      return state;
    default:
      return defaultState;
  }
};

export default NoteReducer;
