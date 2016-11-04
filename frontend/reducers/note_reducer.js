import { NoteConstants } from '../actions/note_actions.js';

const defaultState = {
  scale: {
    root: 'A',
    name: 'natural_minor'
  },
  chord: {
    root: 'C',
    name: 'major'
  }
};

const NoteReducer = (state = [], action) => {

  let newState;
  switch (action.type) {
    default:
      return defaultState;
  }
};

export default NoteReducer;
