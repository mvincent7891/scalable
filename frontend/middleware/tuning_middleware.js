import { TuningConstants } from '../actions/tuning_actions.js';
import { NotificaitonConstants,
         createNotification,
         destroyNotification } from '../actions/notification_actions';

const tuningNotification = (dispatch, message) => {
  dispatch(createNotification(message, 'success'));
  setTimeout(() => dispatch(destroyNotification()), 2000);
};

const TuningMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case TuningConstants.UPDATE_NOTE:
      tuningNotification(dispatch, 'Successfully updated tuning');
      return next(action);
    case TuningConstants.UPDATE_TUNING:
      tuningNotification(dispatch, 'Successfully updated tuning');
      return next(action);
    case TuningConstants.RESET_TUNING:
      tuningNotification(dispatch, 'Reset to standard tuning');
      return next(action);
    default:
      return next(action);
  }
};

export default TuningMiddleware;
