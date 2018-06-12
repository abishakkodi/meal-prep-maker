import { FETCH_RECIPES, FETCH_INGREDIENTS } from './types';
import axios from 'axios';

export const fetchRecipes = () => dispatch => {
  axios.get('http://localhost:8000/readRecipes')
  .then(recipes=>{
    recipes = recipes.data;
    dispatch({
      type: FETCH_RECIPES,
      payload: recipes
    });
  })
  .catch((err)=> {
    console.log('ERROR FETCH RECIPES ACTION', err)
  });

};


