import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import solarReducer from "./reducers/solar";
import weatherReducer from "./reducers/weather";
import todayReducer from "./reducers/equivalent_power";

const rootReducer = combineReducers({
  solar: solarReducer,
  weather: weatherReducer,
  toggle: todayReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));