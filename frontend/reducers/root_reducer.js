import { combineReducers } from 'redux';
import ChordReducer from './chord_reducer';
import NotificationReducer from './notifications_reducer';

const RootReducer = combineReducers({
  chords: ChordReducer,
  notifications: NotificationReducer
});

export default RootReducer;
