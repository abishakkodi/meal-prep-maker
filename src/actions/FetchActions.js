import { FETCH_RECIPES, GET_RECIPES } from './types';

export const setRecipes = data => ({type: FETCH_RECIPES, payload: data});

export const getRecipes = data =>({type: GET_RECIPES, payload: data});



