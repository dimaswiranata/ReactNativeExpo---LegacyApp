import { SET_PLACES, REMOVE_PLACE, PLACE_LOADED, START_LOADED } from '../../type/places';

const initialState = {
  places: [],
  loadedPlace: false
};

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_PLACES:
      return {
        ...state,
        places: action.places
      };
    case REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.key;
        })
      };
    case PLACE_LOADED:
      return {
        ...state,
        loadedPlace: true
      };
    case START_LOADED:
      return {
        ...state,
        loadedPlace: false
      }
    default:
      return state;
  }
};

export default Reducer;