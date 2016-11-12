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
      let newNotes = [...action.notes];
      let newState = merge({}, state, { notes: newNotes });
      // NB: The line below was added because _.merge is deep merging.
      // If there were previously 70 notes and now only 69, the 70th
      // would be preserved. This is undesirable. TODO: One way to fix this
      // would be to have a note for every fret (chord and scale), with
      // radius set to 0 for notes not included.
      newState.notes = newState.notes.slice(0, newNotes.length);
      return newState;
    case NoteConstants.UPDATE_CHORD:
      let chord = action.chord;
      return merge({}, state, { chord });
    case NoteConstants.UPDATE_SCALE:
      let scale = action.scale;
      return merge({}, state, { scale });
    default:
      return state;
  }
};

export default NoteReducer;
