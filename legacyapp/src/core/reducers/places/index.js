import {ADD_PLACE, DELETE_PLACE } from '../../type/places';

const initialState = {
  places: []
};

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: 'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg',
          location: action.location
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default Reducer;