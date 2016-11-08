import { NoteConstants } from '../actions/note_actions.js';
import merge from 'lodash/merge';

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
  },
  notes: []
};

const NoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NoteConstants.RECEIVE_NOTES:
      let notes = action.notes;
      return merge({}, state, { notes });
    default:
      return state;
  }
};

export default NoteReducer;
