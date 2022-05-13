import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "middleware/logger";
import rootReducer from "redux/reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
