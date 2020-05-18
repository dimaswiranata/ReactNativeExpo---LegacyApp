import { 
  createStore, 
  combineReducers, 
  compose,
  applyMiddleware 
} from 'redux';

import thunk from 'redux-thunk';

import placesReducer from './reducers/places';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  places: placesReducer,
  auth: authReducer
});

let composeEnhancer = compose;

if (__DEV__){
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureCore = () => {
  return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
};

export default configureCore;