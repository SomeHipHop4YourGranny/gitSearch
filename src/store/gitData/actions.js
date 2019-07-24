import { reject } from "q";

export const GET_GIT_USERDATA = "GET_GIT_DATA";
export const GET_GIT_USERDATA_SUCCESS = "GET_GIT_USERDATA_SUCCESS";
export const GET_GIT_USERDATA_ERROR = "GET_GIT_USERDATA_ERROR";
export const GET_GIT_REPOS_SUCCESS = "GET_GIT_REPOS_SUCCESS";
export const GET_GIT_REPOS_ERROR = "GET_GIT_REPOS_ERROR";
export const SET_LOGIN = "SET_LOGIN";
export const RECIEVE_DATA = "RECIEVE_DATA";
export const REQUEST_DATA = "REQUEST_DATA";

export const getData = login => {
  return dispatch => {
    dispatch(requestData());
    return dispatch(getUserData(login)).then(() => {
      dispatch(getReposData(login)).then(() => {
        dispatch(recieveData());
      });
    });
  };
};

const getUserData = login => {
  return dispatch => {
    return fetch(`https://api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) {
          const err = response.statusText;
          return reject(err);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        dispatch(getUserDataSuccess(data));
      })
      .catch(err => {
        dispatch(getUserDataError(err));
      });
  };
};
const getReposData = login => {
  return dispatch => {
    return fetch(`https://api.github.com/users/${login}/repos`)
      .then(response => {
        if (!response.ok) {
          const err = response.statusText;
          return reject(err);
        }
        return response;
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(getReposDataSuccess(data));
      })
      .catch(err => {
        dispatch(getReposDataError(err));
      });
  };
};
export const recieveData = () => {
  return { type: RECIEVE_DATA };
};
export const requestData = () => {
  return { type: REQUEST_DATA };
};

export const getUserDataSuccess = data => {
  return { type: GET_GIT_USERDATA_SUCCESS, payload: data };
};

export const getUserDataError = err => {
  return { type: GET_GIT_USERDATA_ERROR, payload: err };
};

export const getReposDataSuccess = data => {
  return { type: GET_GIT_REPOS_SUCCESS, payload: data };
};

export const getReposDataError = err => {
  return { type: GET_GIT_REPOS_ERROR, payload: err };
};

export const setLogin = login => {
  return { type: SET_LOGIN, payload: login };
};
