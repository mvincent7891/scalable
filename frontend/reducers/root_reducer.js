import { combineReducers } from 'redux';
import NotificationReducer from './notifications_reducer';
import FretboardReducer from './fretboard_reducer';
import NoteReducer from './note_reducer';
import TuningReducer from './tuning_reducer';
import ProgressionReducer from './progression_reducer';

const RootReducer = combineReducers({
  fretboard: FretboardReducer,
  notifications: NotificationReducer,
  notes: NoteReducer,
  tuning: TuningReducer,
  progression: ProgressionReducer
});

export default RootReducer;
