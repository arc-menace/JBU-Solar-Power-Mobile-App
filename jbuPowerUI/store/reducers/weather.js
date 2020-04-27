import {WEATHER} from "../../data/dummy-weather-data";


const initialState = {
  allWeather: WEATHER
}

export default function weatherReducer(state = initialState, action) {
  switch(action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        allWeather: action.payload
      };
    default:
      return state;
  }
}