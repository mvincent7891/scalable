export const NoteConstants = {
  FETCH_NOTES: 'FETCH_NOTES',
  RECEIVE_NOTES: 'RECEIVE_NOTES'
};

export const fetchNotes = options => ({
  type: NoteConstants.FETCH_NOTES,
  options
});

export const receiveNotes = notes => ({
  type: NoteConstants.RECEIVE_NOTES,
  notes
});
