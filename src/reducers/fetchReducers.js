import { FETCH_RECIPES, FETCH_INGREDIENTS } from '../actions/types';

const initialState = {
  reduxrecipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        reduxrecipes: action.payload
      };
    default:
      return state;
  }
}