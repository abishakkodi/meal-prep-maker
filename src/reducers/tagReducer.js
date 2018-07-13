import { ADD_TAG, REMOVE_TAG } from 'actions/types';

const initialState = {
    activeTags: ['TEST_TAG'],
    tagList: ['Vegetarian', 'Easy Recipes', 'Medium Recipes', 'Hard Recipes']
};

export default function(state = initialState, action) {
    let activeTags = state.activeTags;
    let tagList = state.tagList;
    switch (action.type) {

        case ADD_TAG:
            tagList = state.tagList.filter(tag => tag !== action.payload);
            activeTags.push(action.payload);
            return {
                ...state,
                activeTags,
                tagList
            };

        case REMOVE_TAG:
            activeTags = state.activeTags.filter(tag => tag !== action.payload);
            tagList.push(action.payload);
            return {
                ...state,
                activeTags,
                tagList
            };

        default:
            return state;
    }
}