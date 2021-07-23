import { combineReducers } from 'redux';
import characters from './characters';
import heroes from './heores';

const rootReducers = combineReducers({
  characters,
  heroes,
});

export default rootReducers;
