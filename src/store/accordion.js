import _getData from "../data";

const GET_DATA = "GET_DATA";
const SET_LOADING = "SET_LOADING";
const ON_CLICK = "singleItem/ON_CLICK";

export const getData = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    let data = await _getData();
    dispatch({
      type: GET_DATA,
      payload: data
    });
    dispatch(setLoading(false));
  };
};

export const onClickHandler = id => {
  return (dispatch, getState) => {
    if (id === getState().accordionData.currentActiveTab) {
      dispatch({
        type: ON_CLICK,
        payload: null
      });
    } else {
      dispatch({
        type: ON_CLICK,
        payload: id
      });
    }
  };
};

const setLoading = bool => {
  return {
    type: SET_LOADING,
    payload: bool
  };
};

const initialState = {
  data: [],
  isLoading: false,
  currentActiveTab: null
};

const accordionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: [...action.payload]
      };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ON_CLICK:
      return {
        ...state,
        currentActiveTab: action.payload
      };
    default:
      return state;
  }
};

export default accordionReducer;
