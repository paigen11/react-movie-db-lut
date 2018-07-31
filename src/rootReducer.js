import { combineReducers } from 'redux';

// named because that's what this reducer has to do with
import message from './reducer';

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
