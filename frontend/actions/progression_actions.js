export const ProgressionConstants = {
  PUSH_CHORD: `PUSH_CHORD`,
  POP_CHORD: `POP_CHORD`,
  REMOVE_CHORD_BY_INDEX: `REMOVE_CHORD_BY_INDEX`,
  DELETE_ALL_CHORDS: `DELETE_ALL_CHORDS`,
  DUPLICATE_INDEX_AND_PUSH_CHORD: `DUPLICATE_INDEX_AND_PUSH_CHORD`
};

export const pushChord = chord => ({
  type: ProgressionConstants.PUSH_CHORD,
  chord
});

export const popChord = () => ({
  type: ProgressionConstants.POP_CHORD
});

export const removeChordByIndex = idx => ({
  type: ProgressionConstants.REMOVE_CHORD_BY_INDEX,
  idx
});

export const deleteAllChords = () => ({
  type: ProgressionConstants.DELETE_ALL_CHORDS
});

export const duplicateIndexAndPushChord = idx => ({
  type: ProgressionConstants.DUPLICATE_INDEX_AND_PUSH_CHORD,
  idx
});
