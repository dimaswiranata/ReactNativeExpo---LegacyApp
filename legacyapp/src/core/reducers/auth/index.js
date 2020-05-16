import { TRY_AUTH, LOG_OUT } from '../../type/auth';

const initialState = {
  auth: true
};

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case TRY_AUTH:
      return {
        ...state,
        auth: false
      };
    case LOG_OUT:
      return {
        ...state,
        auth: true
      };
    default:
      return state;
  }
};

export default Reducer;