import { NoteConstants,
         receiveNotes } from '../actions/note_actions.js';
import { NotificaitonConstants,
         createNotification,
         destroyNotification } from '../actions/notification_actions';
import { fetchNotes } from '../util/note_util';

const NoteMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case NoteConstants.FETCH_NOTES:
      let state = getState();
      const success = notes => {
        dispatch(receiveNotes(notes));
        dispatch(createNotification('Fretboard updated', 'success'));
        setTimeout(() => dispatch(destroyNotification()), 2000);
      };
      const error = () => console.log('Error fetching notes');
      fetchNotes(state, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default NoteMiddleware;
