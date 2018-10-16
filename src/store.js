import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";

export default function configureStore(initialState = {}) {
  const middleware = applyMiddleware(thunk);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  return createStore(rootReducer, composeEnhancers(middleware));
}