import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import accordionReducer from "./accordion";

const rootReducer = combineReducers({
  accordionData: accordionReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (process.env.NODE_ENV === "development") {
  window.store = store;
}

export default store;
