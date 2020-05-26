import { SET_PLACES, REMOVE_PLACE, PLACE_LOADED, START_LOADED } from '../../type/places';
import { uiStartLoading, uiStopLoading, authGetToken } from '../index';
import NavigationUtils from '../../../utils/navigation.utils';

export const loadedPlace = () => {
  return {
    type: PLACE_LOADED
  };
};

export const startLoaded = () => {
  return {
    type: START_LOADED
  };
};

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    let authToken;
    dispatch(uiStartLoading());
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        authToken = token;
        return fetch(
          "https://us-central1-awesome-place-app-277412.cloudfunctions.net/storeImage",
          {
            method: "POST",
            body: JSON.stringify({
              image: image.base64
            }),
            headers: {
              Authorization: "Bearer " + authToken
            }
          }
        );
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch(
          "https://awesome-place-app-277412.firebaseio.com/places.json?auth=" +
            authToken,
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        );
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(uiStopLoading());
        NavigationUtils.navigate('Find');
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        dispatch(uiStopLoading());
      });
  };
};

// export const getPlaces = () => {
//   return (dispatch, getState) => {
//     const token = getState().auth.token;
//     if (!token){
//       return;
//     }
//     fetch("https://awesome-place-app-277412.firebaseio.com/places/.json?auth=" + token)
//     .then(res => res.json())
//     .then(parsedRes => {
//       const places = [];
//       for (let key in parsedRes) {
//         places.push({
//           ...parsedRes[key],
//           image: {
//             uri: parsedRes[key].image
//           },
//           key: key
//         });
//       }
//       dispatch(setPlaces(places));
//     })
//     .catch(err => {
//       alert("Something went wrong, sorry :/");
//       console.log(err);
//     });
//   };
// };

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch(
          "https://awesome-place-app-277412.firebaseio.com/places.json?auth=" +
          token
        );
      })
      .catch(() => {
        alert("No valid token found!");
      })
      .then(res => res.json())
      .then(parsedRes => {
        const places = [];
        for (let key in parsedRes) {
          places.push({
            ...parsedRes[key],
            image: {
              uri: parsedRes[key].image
            },
            key: key
          });
        }
        dispatch(setPlaces(places));
      })
      .catch(err => {
        alert("Something went wrong, sorry :/");
        console.log(err);
      });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  };
};

export const deletePlace = key => {
  return dispatch => {
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        dispatch(removePlace(key));
        return fetch(
          "https://awesome-place-app-277412.firebaseio.com/places/" +
            key +
            ".json?auth=" +
            token,
          {
            method: "DELETE"
          }
        );
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log("Done!");
      })
      .catch(err => {
        alert("Something went wrong, sorry :/");
        console.log(err);
      });
  };
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    key: key
  };
};