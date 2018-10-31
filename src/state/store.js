import cowReducer from "./cowReducer";
import { createStore } from "redux";

const store = createStore(
    cowReducer,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
