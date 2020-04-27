import Weather from "../../models/weather";


export async function fetchWeather() {
  const response = await fetch('http://ec2-35-174-173-68.compute-1.amazonaws.com/api/weather/', {
    method: 'GET',
    headers: {
      "Authorization": "Token ad83f0dd7bc38a2315bd8b410430a7baae7d0f09",
      "Content-Type": "application/json"
    }
  });

  if(!response.ok){
    const errorData = await response.json();
    console.log(errorData);
    return;
  }

  const responseData = await response.json();

  const loadedWeather = [];

  for(const i in responseData){
    loadedWeather.push(new Weather(
      responseData[i].description,
      responseData[i].temp,
      responseData[i].wind_speed,
      responseData[i].clouds,
      responseData[i].time
    ));
  }

  return{
    type: "FETCH_WEATHER",
    payload: loadedWeather
  };
}