import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import APP_REDUCERS from "../reducers/reducers";

const COMPOSED_ENHANCER = composeWithDevTools(applyMiddleware(thunk));

const STORE = createStore(APP_REDUCERS, COMPOSED_ENHANCER);

export default STORE;