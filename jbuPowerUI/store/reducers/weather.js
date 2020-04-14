import { WEATHER } from "../../data/dummy-weather-data";

const initialState = {
  allWeather: WEATHER,
};

export default (state = initialState, action) => {
  return state;
};
