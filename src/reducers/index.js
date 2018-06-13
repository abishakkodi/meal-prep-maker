import { combineReducers } from 'redux';
import fetchReducer from './fetchReducers';

export default combineReducers({
  stored: fetchReducer
});