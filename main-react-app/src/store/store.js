import { createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
import allReducers from "../reducers/allReducers";

const mainstore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default mainstore;
