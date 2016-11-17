export const TuningConstants = {
  UPDATE_NOTE: "UPDATE_NOTE",
  UPDATE_TUNING: "UPDATE_TUNING",
  RESET_TUNING: "RESET_TUNING",
  UPDATE_TUNING_BY_NOTES: "UPDATE_TUNING_BY_NOTES",
  TUNING_CHANGED: "TUNING_CHANGED"
};

export const updateNote = (note, idx) => ({
  type: TuningConstants.UPDATE_NOTE,
  note,
  idx
});

export const tuningChanged = () => ({
  type: TuningConstants.TUNING_CHANGED
});

export const updateTuningByNotes = tuning => ({
  type: TuningConstants.UPDATE_TUNING_BY_NOTES,
  tuning
});

export const updateTuning = tuning => ({
  type: TuningConstants.UPDATE_TUNING,
  tuning
});

export const resetTuning = () => ({
  type: TuningConstants.RESET_TUNING
});
