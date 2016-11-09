import { NoteConstants,
         receiveNotes } from '../actions/note_actions.js';
import { TuningConstants } from '../actions/tuning_actions.js';
import { NotificaitonConstants,
         createNotification,
         destroyNotification } from '../actions/notification_actions';
import { fetchNotes } from '../util/note_util';

const NoteMiddleware = ({ getState, dispatch }) => next => action => {

  const fetchNotesHelper = () => {
    let state = getState();
    const success = notes => dispatch(receiveNotes(notes));
    const error = () => console.log('Error fetching notes');
    fetchNotes(state, success, error);
  };

  switch(action.type) {
    case TuningConstants.TUNING_CHANGED:
      fetchNotesHelper();
      return next(action);
    case NoteConstants.FETCH_NOTES:
      fetchNotesHelper();
      return next(action);
    default:
      return next(action);
  }
};

export default NoteMiddleware;
