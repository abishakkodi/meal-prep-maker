import { FETCH_RECIPES } from '../actions/types';

const initialState = {
  storedRecipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        storedRecipes: action.payload
      };
    default:
      return state;
  }
}
