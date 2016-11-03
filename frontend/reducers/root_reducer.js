import { combineReducers } from 'redux';
import ChordReducer from './chord_reducer';
import NotificationReducer from './notifications_reducer';
import FretboardReducer from './fretboard_reducer';

const RootReducer = combineReducers({
  chords: ChordReducer,
  fretboard: FretboardReducer,
  notifications: NotificationReducer
});

export default RootReducer;
