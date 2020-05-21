import AsyncStorage from '@react-native-community/async-storage';

import { TRY_AUTH, LOG_OUT, AUTH_SET_TOKEN } from '../../type/auth';
import { uiStartLoading, uiStopLoading } from '../index';

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    if(authMode === 'login') {
      dispatch(authSignin(authData));
    } else {
      dispatch(authSignup(authData));
    }
  };
};

export const gotoApp = () => {
  return {
    type: TRY_AUTH
  };
};

export const authSignup = (authData) => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1QT0Ss6N715yMQ2JRpoZ5hlRuwFCp0a0', {
      method: 'POST',
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type':'application/json'
      }
    })
    .catch( err =>  {
      console.log(err);
      dispatch(uiStopLoading());
      alert('Authentication failed, please try again!');
    })
    .then(res => res.json())
    .then(parsedRes =>{
      dispatch(uiStopLoading());
      console.log(parsedRes);
      if (!parsedRes.idToken){
        alert('Authentication failed, please try again!');
      } else {
        dispatch(gotoApp());
        dispatch(authSetToken(parsedRes.idToken));
      }
    });
  };
};

export const authSignin = (authData) => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1QT0Ss6N715yMQ2JRpoZ5hlRuwFCp0a0', {
      method: 'POST',
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type':'application/json'
      }
    })
    .catch( err =>  {
      console.log(err);
      dispatch(uiStopLoading());
      alert('Authentication failed, please try again!');
    })
    .then(res => res.json())
    .then(parsedRes =>{
      console.log(parsedRes);
      dispatch(uiStopLoading());
      if (!parsedRes.idToken){
        alert('Authentication failed, please try again!');
      } else {
        dispatch(gotoApp());
        dispatch(authStoreToken(parsedRes.idToken));
      }
    });
  };
};

export const authStoreToken = token => {
  return dispatch => {
    dispatch(authSetToken(token));
    AsyncStorage.setItem("ap:auth:token", token);
  };
};

export const authSetToken = (token) => {
  return {
    type: AUTH_SET_TOKEN,
    token: token
  };
};

export const authGetToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const token = getState().auth.token;
      if (!token) {
        AsyncStorage.getItem("ap:auth:token")
          .catch(err => reject())
          .then(tokenFromStorage => {
            dispatch(authSetToken(tokenFromStorage));
            resolve(tokenFromStorage);
          });
      } else {
        resolve(token);
      }
    });
    return promise;
  };
};

export const logout = () => {
  return {
    type: LOG_OUT
  };
};