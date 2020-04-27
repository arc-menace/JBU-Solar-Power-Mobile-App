import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import solarReducer from "./reducers/solar";
import weatherReducer from "./reducers/weather";

const rootReducer = combineReducers({
  solar: solarReducer,
  weather: weatherReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));