import { FETCH_RECIPES } from './types';
import axios from 'axios';

export const fetchRecipes = () => dispatch => {
  axios.get('http://localhost:8000/readRecipes')
  .then(recipes=>{
    recipes = recipes.data;
    console.log(recipes);
    dispatch({
      type: FETCH_RECIPES,
      payload: recipes
    });
  })
  .catch((err)=> {
    console.log('ERROR FETCH RECIPES ACTION', err)
  });

};

export const setRecipes = data => ({type: FETCH_RECIPES, payload: data});


export const asyncFetch = () => (dispatch) => {
  axios.get('http://localhost:8000/readRecipes')
  .then(recipes=>{
    recipes = recipes.data;
    dispatch(setRecipes(recipes));
  })
  .catch((err)=> {
    console.log('ERROR FETCH RECIPES ACTION', err)
  });
}

