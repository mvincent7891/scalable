import { NoteConstants } from '../actions/note_actions.js';

const defaultState = {
  scale: {
    root: 0,
    name: 'natural_minor'
  },
  chord: {
    root: 3,
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
