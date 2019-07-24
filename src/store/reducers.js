import { combineReducers } from "redux";

import { gitDataReducer } from "./gitData/reducers";

const rootReducer = combineReducers({
  git: gitDataReducer,
});

export default rootReducer;
