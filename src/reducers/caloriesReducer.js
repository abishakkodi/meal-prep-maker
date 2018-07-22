import { SET_CALORIES } from 'actions/types';

const initalState = { calories: 2000 };

export default function(state = initalState, action) {
  switch(action.type) {
    case SET_CALORIES:
      let calories = action.payload;
      return {
        ...state,
        calories
      };

    default:
      return state
  }
}