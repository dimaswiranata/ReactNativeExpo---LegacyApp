import { createStore, combineReducers } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

const configureCore = () => {
  return createStore(rootReducer);
};

export default configureCore;