export const NoteConstants = {
  FETCH_NOTES: 'FETCH_NOTES',
  RECEIVE_NOTES: 'RECEIVE_NOTES',
  UPDATE_CHORD: 'UPDATE_CHORD',
  UPDATE_SCALE: 'UPDATE_SCALE'
};

export const fetchNotes = () => ({
  type: NoteConstants.FETCH_NOTES
});

export const receiveNotes = notes => ({
  type: NoteConstants.RECEIVE_NOTES,
  notes
});

export const updateChord = chord => ({
  type: NoteConstants.UPDATE_CHORD,
  chord
});

export const updateScale = scale => ({
  type: NoteConstants.UPDATE_SCALE,
  scale
});
