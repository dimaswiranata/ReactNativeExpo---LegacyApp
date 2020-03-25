import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../../type/places';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: 'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg'
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return{
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    case DESELECT_PLACE:
      return{
        ...state,
        selectedPlace: null
      }
    default:
      return state;
  }
};

export default reducer;