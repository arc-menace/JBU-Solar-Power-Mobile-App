import Weather from "../../models/weather";

export const fetchWeather = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://ec2-35-174-173-68.compute-1.amazonaws.com/api/weather/', {
        method: 'GET',
        headers: {
          Authorization: "Token ad83f0dd7bc38a2315bd8b410430a7baae7d0f09",
          "Content-Type": "application/json"
        }

      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);

        // throw error
      }
      const responseData = await response.json();

      const loadedWeather = [];

      for (const key in responseData) {
        loadedWeather.push(
          new Weather(
            responseData[key].description,
            responseData[key].temp,
            responseData[key].wind_speed,
            responseData[key].clouds,
            responseData[key].time
          )
        );
      }
      dispatch({
        type: "FETCH_WEATHER",
        payload: loadedWeather,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
