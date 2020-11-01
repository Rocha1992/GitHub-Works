let currentTime = new Date();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formDate(currentTime);
dateElement.innerHTML = formatTime(response.data.dt+1000);

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
  ]
  let month = months[date.getMonth()];

  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${date} ${hours}:${minutes}`;
}

function formatTime(timestamp) {
  // get the current time
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10)
  hours=`0${hours}`;
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes =`0${minutes}`;
  }
  let day = days[date.getDay()];
 
}

function handleSubmit(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement);
  cityElement.innerHTML = cityInput.value;

  searchCity(cityInputElement.value);
}

function searchCity(city) {
  let key = `0c9d950699fec8362223f7a0e10d4ecd`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function convertFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature=(celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature =null;

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
  let tempElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement=document.querySelector("#icon");

celsiusTemperature = response.data.main.temp;

  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/04d@2x.png`);
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/04d@2x.png`);
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/04d@2x.png`);
  iconElement.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
  iconElement.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
  iconElement.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
  humidityElement.innerHTML =response.data.main.humidity;
  windElement.innerHTML= Math.round(response.data.wind.speed);
  cityElement.innerHTML = `${response.data.name}`;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  description.innerHTML = response.data.weather[0].description;
}

function searchPosition(position) {
  let city="Vancouver";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = `0c9d950699fec8362223f7a0e10d4ecd`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  axios.get(url).then(searchPosition);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentLocation(searchPosition);
}

let button = document.querySelector("button");
button.addEventListener("submit", getCurrentLocation);

searchCity("Vancouver");


