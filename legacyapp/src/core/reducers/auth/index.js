import { TRY_AUTH, LOG_OUT, AUTH_SET_TOKEN } from '../../type/auth';

const initialState = {
  isAuth: true,
  token: null
};

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case TRY_AUTH:
      return {
        ...state,
        isAuth: false
      };
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case LOG_OUT:
      return {
        ...state,
        isAuth: true
      };
    default:
      return state;
  }
};

export default Reducer;