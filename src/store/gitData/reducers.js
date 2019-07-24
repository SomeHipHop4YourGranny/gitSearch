import {
  SET_LOGIN,
  GET_GIT_USERDATA_SUCCESS,
  GET_GIT_USERDATA_ERROR,
  GET_GIT_REPOS_SUCCESS,
  GET_GIT_REPOS_ERROR,
  RECIEVE_DATA,
  REQUEST_DATA,
} from "./actions";

const initialState = {
  login: "",
  userData: {},
  reposData: [],
  isLoading: false,
  error: "",
};

export const gitDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case GET_GIT_USERDATA_SUCCESS:
      return { ...state, userData: action.payload };
    case GET_GIT_USERDATA_ERROR:
      return { ...state, userData: {}, error: action.payload };
    case GET_GIT_REPOS_SUCCESS:
      return { ...state, reposData: action.payload };
    case GET_GIT_REPOS_ERROR:
      return { ...state, reposData: [], error: action.payload };
    case RECIEVE_DATA:
      return { ...state, isLoading: false };
    case REQUEST_DATA:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
