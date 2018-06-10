import { FETCH_RECIPES, FETCH_INGREDIENTS } from './types';
import axios from 'axios';


export const fetchRecipes = () = dispatch => {
  let action = {};

  axios.get('http://localhost:8000/readRecipes')
  .then( res => res.json())
  .then((recipes)=>{
    dispatch({
      type: RECIPES,
      payload: recipes
    });
  })
  .catch((err)=> {
    console.log('ERROR FETCH RECIPES ACTION', err)
  });

};


