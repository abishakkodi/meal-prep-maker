import { SET_MEALPLAN } from 'action/types';

const initalState = {mealplan: []};

export default function(state = initalState, action) {
  switch(action.type) {
    case SET_MEALPLAN:
      let mealplan = action.payload;
      return {
        ...state,
        mealplan
      };

    default:
      return state
  }
}