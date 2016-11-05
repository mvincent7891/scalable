export const TuningConstants = {
  UPDATE_NOTE: "UPDATE_NOTE",
  UPDATE_TUNING: "UPDATE_TUNING",
  RESET_TUNING: "RESET_TUNING"
};

export const updateNote = (note, idx) => ({
  type: TuningConstants.UPDATE_NOTE,
  note,
  idx
});

export const updateTuing = (tuning) => ({
  type: TuningConstants.UPDATE_TUNING,
  tuning
});

export const resetTuning = () => ({
  type: TuningConstants.RESET_TUNING
});
