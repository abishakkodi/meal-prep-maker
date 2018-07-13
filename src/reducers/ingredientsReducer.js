import { ADD_INGREDIENT, REMOVE_INGREDIENT, INITIALIZE_INGREDIENTS
 } from 'actions/types';

const initialState = {
    activeIngredients: ['testActiveIngredient'],
    ingredientsList: ['testRegularIngredient']
}

export default function(state = initialState, action) {
    let activeIngredients = state.activeIngredients;
    let ingredientsList = state.ingredientsList;
    switch (action.type) {

        case ADD_INGREDIENT:
            ingredientsList = state.ingredientsList.filter(ingredient => ingredient !== action.payload);
            activeIngredients.push(action.payload);
            return {
                ...state,
                activeIngredients,
                ingredientsList
            };

        case REMOVE_INGREDIENT:
            activeIngredients = state.activeIngredients.filter(ingredient => ingredient !== action.payload);
            ingredientsList.push(action.payload);
            return {
                ...state,
                activeIngredients,
                ingredientsList
            };

        case INITIALIZE_INGREDIENTS:
            ingredientsList = action.payload;
            return {
                ...state,
                ingredientsList
            };

        default:
            return state;
    }
}