import { combineReducers } from 'redux';
import NotificationReducer from './notifications_reducer';
import FretboardReducer from './fretboard_reducer';
import NoteReducer from './note_reducer';

const RootReducer = combineReducers({
  fretboard: FretboardReducer,
  notifications: NotificationReducer,
  notes: NoteReducer
});

export default RootReducer;
