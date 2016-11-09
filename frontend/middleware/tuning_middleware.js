import { TuningConstants,
         tuningChanged } from '../actions/tuning_actions.js';
import { fetchNotes } from '../actions/note_actions';
import { NotificaitonConstants,
         createNotification,
         destroyNotification } from '../actions/notification_actions';

const tuningHelper = (dispatch, message) => {
  dispatch(tuningChanged());
  dispatch(createNotification(message, 'success'));
  setTimeout(() => dispatch(destroyNotification()), 2000);
};

const TuningMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case TuningConstants.UPDATE_NOTE:
      tuningHelper(dispatch, 'Successfully updated tuning');
      return next(action);
    case TuningConstants.UPDATE_TUNING:
      tuningHelper(dispatch, 'Successfully updated tuning');
      return next(action);
    case TuningConstants.RESET_TUNING:
      tuningHelper(dispatch, 'Reset to standard tuning');
      return next(action);
    default:
      return next(action);
  }
};

export default TuningMiddleware;
