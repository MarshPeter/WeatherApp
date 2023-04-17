console.log("Hello World");

// TODO: USE THIS PROPERLY. THE FUNCTION AS IS WORKS.
function getWeatherForecast(cityName) {
  let request = `${BASE_URL}/current.json?key=${API_KEY}&q=${cityName}`;
  fetch(request)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

getWeatherForecast("London");
