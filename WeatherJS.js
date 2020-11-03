let currentTime = new Date();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formDate(currentTime);

function formDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[date.getMonth()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let year = date.getFullYear();

  return `${day} ${month} ${date} ${year}`;
}

function handleSubmit(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}

function showForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = null;
  forecast.innherHTML=null;

  for (let index = 0; index < 6; index++) {
    let forecast=response.data.list[0];
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col-2">
    <strong>
      Today
    </strong>
    <br />
    <img src ="http://openweathermap.org/img/wn/${
      forecast.weather[0].icon
    }@2x.png"alt="clear"class="float-left" id="icon"></i>
    <div class="weather-forecast-temperature">
    <p>${Math.round(forecast.main.temp_max)}° | </p>${Math.round(
      forecast.main.temp_min
    )}°
  </div>`;

  forecastElement.innerHTML += `
  <div class="col-2">
  <strong>
    Today
  </strong>
  <br />
  <img src ="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"alt="clear"class="float-left" id="icon"></i>
  <div class="weather-forecast-temperature">
  <p>${Math.round(forecast.main.temp_max)}° | </p>${Math.round(
    forecast.main.temp_min
  )}°
</div>`;
  console.log(response.data[0]);

  forecast = response.data.list[1];
  forecastElement.innerHTML += `
  <div class="col-2">
  <strong>
    Monday
  </strong>
  <br />
  <img src ="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"alt="clear"class="float-left" id="icon"></i>
  <div class="weather-forecast-temperature">
  <p>${Math.round(forecast.main.temp_max)}° | </p>${Math.round(
    forecast.main.temp_min
  )}°
</div>`;

forecast = response.data.list[2];
  forecastElement.innerHTML += `
  <div class="col-2">
  <strong>
    Tuesday
  </strong>
  <br />
  <img src ="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"alt="clear"class="float-left" id="icon"></i>
  <div class="weather-forecast-temperature">
  <p>${Math.round(forecast.main.temp_max)}° | </p>${Math.round(
    forecast.main.temp_min
  )}°
</div>`;

forecast = response.data.list[3];
  forecastElement.innerHTML += `
  <div class="col-2">
  <strong>
    Wednesday
  </strong>
  <br />
  <img src ="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"alt="clear"class="float-left" id="icon"></i>
  <div class="weather-forecast-temperature">
  <p>${Math.round(forecast.main.temp_max)}° | </p>${Math.round(
    forecast.main.temp_min
  )}°
</div>`;

forecast = response.data.list[4];
  forecastElement.innerHTML += `
  <div class="col-2">
  <strong>
    Thursday
  </strong>
  <br />
  <img src ="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"alt="clear"class="float-left" id="icon"></i>
  <div class="weather-forecast-temperature">
  <p>${Math.round(forecast.main.temp_max)}° | </p>${Math.round(
    forecast.main.temp_min
  )}°
</div>`;

forecast = response.data.list[5];
  forecastElement.innerHTML += `
  <div class="col-2">
  <strong>
    Friday
  </strong>
  <br />
  <img src ="http://openweathermap.org/img/wn/${
    forecast.weather[0].icon
  }@2x.png"alt="clear"class="float-left" id="icon"></i>
  <div class="weather-forecast-temperature">
  <p>${Math.round(forecast.main.temp_max)}° | </p>${Math.round(
    forecast.main.temp_min
  )}°
</div>`;
 }
}

function searchCity(city) {
  let key = `0c9d950699fec8362223f7a0e10d4ecd`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function convertFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  // remove the active class from celsius link
  celsiusLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;

function convertCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertCelsius);

function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  cityElement.innerHTML = `${response.data.name}`;
  temperatureElement.innerHTML = `${temperature}°C`;
  description.innerHTML = response.data.weather[0].description;
}

function searchPosition(position) {
  let city = "Vancouver";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = `0c9d950699fec8362223f7a0e10d4ecd`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  axios.get(url).then(searchPosition);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentLocation(searchPosition);
}

let button = document.querySelector("#current-location");
button.addEventListener("submit", getCurrentLocation);

searchCity("Vancouver");



