import Solar from "../../models/solar";

export const fetchSolar = () => {
  console.log("Hello from action");
  return async (dispatch, getState) => {
    console.log("before fetch");
    try {
      const response = await fetch('http://ec2-35-174-173-68.compute-1.amazonaws.com/api/solar/', {
        method: 'GET',
        headers: {
          Authorization: "Token ad83f0dd7bc38a2315bd8b410430a7baae7d0f09",
          "Content-Type": "application/json"
        }

      });
      console.log("before error check");
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);

        // throw error
      }
      console.log("after error check");
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
      console.log("Before dispatch");
      dispatch({
        type: "FETCH_SOLAR",
        payload: loadedSolar,
      });
    } catch (err) {
      console.log(err);
    }
    console.log("After dispatch");
  };
};
