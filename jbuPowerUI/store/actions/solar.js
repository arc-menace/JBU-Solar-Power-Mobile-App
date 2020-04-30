import Solar from "../../models/solar";

export const fetchSolar = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://ec2-35-174-173-68.compute-1.amazonaws.com/api/solar/', {
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

      const loadedSolar = [];

      for (const key in responseData) {
        loadedSolar.push(
          new Solar(
            responseData[key].current_power,
            responseData[key].energy_today,
            responseData[key].energy_lifetime,
            responseData[key].status,
            responseData[key].time
          )
        );
      }
      dispatch({
        type: "FETCH_SOLAR",
        payload: loadedSolar,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
