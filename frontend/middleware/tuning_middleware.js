import { TuningConstants } from '../actions/tuning_actions.js';
import { NotificaitonConstants,
         createNotification,
         destroyNotification } from '../actions/notification_actions';

const TuningMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case TuningConstants.UPDATE_NOTE:
      dispatch(createNotification('Successfully updated tuning', 'success'));
      setTimeout(() => dispatch(destroyNotification()), 2000);
      return next(action);
    case TuningConstants.UPDATE_TUNING:
      dispatch(createNotification('Successfully updated tuning', 'success'));
      setTimeout(() => dispatch(destroyNotification()), 2000);
      return next(action);
    case TuningConstants.RESET_TUNING:
      dispatch(createNotification('Reset to standard tuning', 'success'));
      setTimeout(() => dispatch(destroyNotification()), 2000);
      return next(action);
    default:
      return next(action);
  }
};

export default TuningMiddleware;
