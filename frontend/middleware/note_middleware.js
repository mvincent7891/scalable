import { NoteConstants,
         receiveNotes } from '../actions/note_actions.js';
import { NotificaitonConstants,
         createNotification,
         destroyNotification } from '../actions/notification_actions';
import { fetchNotes } from '../util/note_util';

const NoteMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case NoteConstants.FETCH_NOTES:
      console.log('fetching');
      let state = getState();
      let options = action.options;
      const success = () => console.log('success fetching');
      const error = () => console.log('error fetching');
      fetchNotes(state, options, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default NoteMiddleware;
