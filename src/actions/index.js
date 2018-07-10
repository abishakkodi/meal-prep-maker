import { FETCH_RECIPES, GET_RECIPES, ADD_INGREDIENT, REMOVE_INGREDIENT, INITIALIZE_INGREDIENTS } from './types';

export const setRecipes = data => ({type: FETCH_RECIPES, payload: data});

export const getRecipes = data =>({type: GET_RECIPES, payload: data});

export const addIngredient = data =>({type: ADD_INGREDIENT, payload: data});

export const removeIngredient = data =>({type: REMOVE_INGREDIENT, payload: data});

export const initializeIngredients = data =>({type: INITIALIZE_INGREDIENTS, payload: data});
