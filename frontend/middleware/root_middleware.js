import { applyMiddleware } from 'redux';
import TuningMiddleware from './tuning_middleware';
import NoteMiddleware from './note_middleware';

const RootMiddleware = applyMiddleware(
  TuningMiddleware,
  NoteMiddleware
);

export default RootMiddleware;
