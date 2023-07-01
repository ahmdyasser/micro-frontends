import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import counterReducer2 from "./counterReducer2";

const allReducers = combineReducers({
  Counter1: counterReducer,
  Counter2: counterReducer2,
});

export default allReducers;
