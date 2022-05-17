import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import logger from "middleware/logger";
import rootReducer from "redux/reducers";

const middlewares = [thunk];
const enhancers = [];

console.log('process.env.NODE_ENV ', process.env.NODE_ENV )
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = compose(middlewareEnhancer, ...enhancers);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
