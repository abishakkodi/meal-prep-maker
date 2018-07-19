import { combineReducers } from 'redux';
import fetchReducer from './fetchReducers';
import getRecipesReducers from './getRecipesReducers';
import ingredientsReducer from './ingredientsReducer';
import tagReducer from './tagReducer';
import mealplanReducer from './mealplanReducer';

export default combineReducers({
  stored: fetchReducer,
  databaseRecipes: getRecipesReducers,
  ingredients: ingredientsReducer,
  tags: tagReducer,
  mealplan: mealplanReducer
});