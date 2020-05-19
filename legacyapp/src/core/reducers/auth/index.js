import { TRY_AUTH, LOG_OUT } from '../../type/auth';

const initialState = {
  isAuth: true
};

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case TRY_AUTH:
      return {
        ...state,
        isAuth: false
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