let weatherData;
let temperatureType = "c";
const cityInputField = document.getElementById("location-text");
const findLocationBtn = document.getElementById("find-location");
const weatherImage = document.getElementById("weather-icon");
const temperatureDisplay = document.getElementById("temperature");
const cityDisplay = document.getElementById("current-city");
const weatherDesc = document.getElementById("description");
const celciusButton = document.getElementById("celcius");
const farenheightButton = document.getElementById("farenheight");

// added event Listeners
celciusButton.addEventListener("click", getCelcius);
farenheightButton.addEventListener("click", getFarenheight);

// call to get temperature of city location
async function getWeatherForecast(cityName, callback) {
  let request = `${BASE_URL}/current.json?key=${API_KEY}&q=${cityName}`;
  let response = await fetch(request);
  return await response.json();
}

async function getData() {
  weatherData = await getWeatherForecast("Melbourne");
  console.log(weatherData);
  displayWeather();
}

async function displayWeather() {
  cityDisplay.innerHTML = weatherData.location["name"];
  weatherDesc.innerHTML = weatherData.current.condition["text"];
  weatherImage.src = weatherData.current.condition["icon"];
  getTemperature();
}

function getTemperature() {
  console.log(weatherData.current["temp_c"]);
  if (temperatureType === "c") {
    temperatureDisplay.innerHTML = weatherData.current["temp_c"] + "°C";
  } else {
    temperatureDisplay.innerHTML = weatherData.current["temp_f"] + "°F";
  }
}

function getCelcius() {
  temperatureType = "c";
  getTemperature();
}

function getFarenheight() {
  temperatureType = "f";
  getTemperature();
}

getData();
