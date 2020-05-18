import { ADD_PLACE, DELETE_PLACE } from '../../type/places';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location
    };
    fetch('https://awesome-place-app-277412.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify(placeData)
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRed => {
      console.log(parsedRed);
    });
  };
};

export const deletePlace = (key) => {
  return {
    type : DELETE_PLACE,
    placeKey : key
  };
};