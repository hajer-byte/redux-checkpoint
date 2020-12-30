import { createStore } from "redux";
import ReducerTask from "../reducers/ReducerTask";

const Store = createStore(
  ReducerTask,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
