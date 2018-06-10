import { combineReducers } from 'redux';
import fetchReducer from './fetchReducers';

export default combineReducers({
  recipes: fetchReducer
});