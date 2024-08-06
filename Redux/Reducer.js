import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from './Actions';
  
  const initialState = {
    data: [],
    error: null,
    loading: false,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_DATA_SUCCESS:
        return { ...state, data: action.payload, loading: false, error: null };
      case FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export default Reducer;
  