import { applyMiddleware } from 'redux';
import TuningMiddleware from './tuning_middleware';
import NoteMiddleware from './note_middleware';
import ProgressionMiddleware from './progression_middleware';

const RootMiddleware = applyMiddleware(
  TuningMiddleware,
  NoteMiddleware,
  ProgressionMiddleware
);

export default RootMiddleware;
