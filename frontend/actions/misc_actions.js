export const MiscActions = {
  LOAD_SESSION: "LOAD_SESSION"
};

export const loadSession = session => ({
  type: MiscActions.LOAD_SESSION,
  session
});
