import { combineReducers } from 'redux';

// named because that's what this reducer has to do with
import toggle from './toggle/reducer';
import movies from './movies/reducer';

const rootReducer = combineReducers({
  toggle,
  movies,
});

export default rootReducer;
