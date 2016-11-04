export const TuningConstants = {
  UPDATE_NOTE: "UPDATE_NOTE"
};

export const updateNote = (note, idx) => ({
  type: TuningConstants.UPDATE_NOTE,
  note,
  idx
});
