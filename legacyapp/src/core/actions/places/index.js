import { ADD_PLACE, DELETE_PLACE } from '../../type/places';

export const addPlace = (placeName) => {
  return {
    type : ADD_PLACE,
    placeName: placeName
  };
};

export const deletePlace = () => {
  return {
    type : DELETE_PLACE
  };
};