import { createStore, combineReducers } from 'redux';

import { example } from './reducers';

const reducers = combineReducers({
  example,
});

const store = createStore(reducers);

export default store;