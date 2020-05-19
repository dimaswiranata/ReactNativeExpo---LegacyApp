import { UI_START_LOADING, UI_STOP_LOADING } from '../../type/UI';

const initialState = {
  isLoading: false
};

const Reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case UI_START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case UI_STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  };
};

export default Reducer;