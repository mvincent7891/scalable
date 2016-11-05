import { applyMiddleware } from 'redux';
import TuningMiddleware from './tuning_middleware';

const RootMiddleware = applyMiddleware(
  TuningMiddleware
);

export default RootMiddleware;
