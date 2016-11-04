import { combineReducers } from 'redux';
import NotificationReducer from './notifications_reducer';
import FretboardReducer from './fretboard_reducer';
import NoteReducer from './note_reducer';
import TuningReducer from './tuning_reducer';

const RootReducer = combineReducers({
  fretboard: FretboardReducer,
  notifications: NotificationReducer,
  notes: NoteReducer,
  tuning: TuningReducer
});

export default RootReducer;
