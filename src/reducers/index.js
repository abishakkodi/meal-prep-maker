import { combineReducers } from 'redux';
import fetchReducer from './fetchReducers';
import getRecipesReducers from './getRecipesReducers';

export default combineReducers({
  stored: fetchReducer,
  databaseRecipes: getRecipesReducers
});