import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const middlware = [thunk];

// create redux store
const store = createStore(rootReducer, applyMiddleware(...middlware));

// export default
export default store;
