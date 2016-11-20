import { ProgressionConstants } from '../actions/tuning_actions.js';

const ProgressionMiddleware = ({ getState, dispatch }) => next => action => {

  switch(action.type) {
    default:
      return next(action);
  }
};

export default ProgressionMiddleware;
