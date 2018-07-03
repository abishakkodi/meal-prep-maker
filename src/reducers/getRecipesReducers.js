import { GET_RECIPES } from '../actions/types';

const initialState = {
  recipes: {protein: [], vegetables: [], carbs: []}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
    console.log('data', action.payload);
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;
  }
}
