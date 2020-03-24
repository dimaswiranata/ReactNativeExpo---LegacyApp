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
          image: 'https://a2.udemycdn.com/2017-11-28_22-12-06-81f19b918bd7c42cff55269192f98f5e/original.jpg?nva=20200318234406&token=0f52448571fc9291e561d'
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