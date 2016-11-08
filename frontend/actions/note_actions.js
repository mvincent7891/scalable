export const NoteConstants = {
  FETCH_NOTES: 'FETCH_NOTES',
  RECEIVE_NOTES: 'RECEIVE_NOTES'
};

export const fetchNotes = () => ({
  type: NoteConstants.FETCH_NOTES
});

export const receiveNotes = notes => ({
  type: NoteConstants.RECEIVE_NOTES,
  notes
});
