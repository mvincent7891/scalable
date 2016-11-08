export const FretboardConstants = {
  UPDATE_DIMENSIONS: 'UPDATE_DIMENSIONS'
};

export const updateDimensions = dimensions => ({
  type: FretboardConstants.UPDATE_DIMENSIONS,
  dimensions
});
