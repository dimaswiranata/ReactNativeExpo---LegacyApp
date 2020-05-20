import { TRY_AUTH, LOG_OUT } from '../../type/auth';
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
      if (parsedRes.error){
        alert('Authentication failed, please try again!');
      } else {
        dispatch(gotoApp());
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
      dispatch(uiStopLoading());
      if (parsedRes.error){
        alert('Authentication failed, please try again!');
      } else {
        dispatch(gotoApp());
      }
    });
  };
};

export const logout = () => {
  return {
    type: LOG_OUT
  };
};