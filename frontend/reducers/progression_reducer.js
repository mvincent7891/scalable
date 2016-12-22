import * as LIBRARY from '../actions/progression_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  playing: false,
  chords: []
};

// Sample progression state:
// {
//   playing: true,
//   chords: [
//     {
//       name: "major",
//       root: 3,
//     },
//     {
//       name: "minor",
//       root: 0,
//     },
//     {
//       name: "major",
//       root: 8,
//     },
//     {
//       name: "major_seventh",
//       root: 10,
//     }
//   ]
// }

const ProgressionReducer = (state = defaultState, action) => {
  let chords, newChords, newChord, idx;
  switch (action.type) {
    case LIBRARY.DELETE_ALL_CHORDS:
      chords = [];
      return merge({}, state, { chords });
    case LIBRARY.PUSH_CHORD:
      newChord = action.chord;
      chords = [...state.chords].push(newChord);
      return merge({}, state, { chords });
    case LIBRARY.POP_CHORD:
      let len = state.chords.length;
      chords = [...state.chords].slice(0, len - 1);
      return merge({}, state, { chords });
    case LIBRARY.REMOVE_CHORD_BY_INDEX:
      idx = action.idx;
      chords = [...state.chords].splice(idx, 1);
      return merge({}, state, { chords });
    case LIBRARY.DUPLICATE_INDEX_AND_PUSH_CHORD:
      newChord = state.chords[action.idx];
      chords = [...state.chords].push(newChord);
      return merge({}, state, { chords });
    default:
      return state;
  }
};

export default ProgressionReducer;
