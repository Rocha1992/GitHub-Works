let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    moscow: {
      temp: -5,
      humidity: 20
    }
  };
  
  let temperature;
  let celsiusTemperature;
  let fahrenheitTemperature;
  let humidity;
  
  let city = prompt("Enter a city");
  if (weather[city] !== undefined) {
    temperature = weather[city].temp;
    celsiusTemperature = Math.round(temperature);
    fahrenheitTemperature = Math.round(temperature);
    humidity = weather[city].humidity;
    alert(
      `It is currently ${temperature}*C,  ${temperature}*F in ${city}, with a humidity of ${humidity}!`
    );
  } else {
    alert(
      "Sorry, we don't have the city you're looking for. Please try searching on Google"
    );
  }
  console.log(weather);
  console.log(temperature);
  console.log(humidity);
  console.log(city);
  console.log(weather[city]);
  console.log(alert);
  console.log(celsiusTemperature);
  console.log(fahrenheitTemperature);
  
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
  
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getMilliseconds();
  
    return `${day}, ${month}, ${year}. ${hours}:${minutes}:${seconds}`;
  }
  
  console.log(formDate);
  console.log(currentTime.getFullYear());
  console.log(currentTime.getHours());
  console.log(currentTime.getMinutes());
  console.log(currentTime.getMilliseconds());
  console.log(currentTime.getDate());
  console.log(currentTime.getDay());
  console.log(currentTime);
  
  function searchCity(event) {
    event.preventDefault();
    let searchCity = document.querySelector("#search-text-input");
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
  
    console.log(searchCity);
    console.log(form);
    console.log(cityInput.value);
    console.log(cityElement);
    console.log(cityInput);
  }
  
  let form = document.querySelector("form");
  form.addEventListener("submit", searchCity);
  
  function convertFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 18;
  }
  
  function convertCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 64;
  }
  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertFahrenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertCelsius);
  
  let key = `0c9d950699fec8362223f7a0e10d4ecd`;
  let url =
    "api.openweathermap.org/data/2.5/weather?q={city name}&appid={APIkey}";
  
  function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#temperature");
    let description = document.querySelector("#temperature-description");
    let city = response.data.name;
    city.innerHTML = `It is currently ${temperature} in ${response.data.name}`;
    tempElement.innerHTML = `${temperature}°C`;
    description.innerHTML = response.data.weather[0].description;
  }
  
  function searchPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    axios.get(url).then(displayWeather);
    console.log(lat);
    console.log(lon);
    console.log(city);
    console.log(key);
  }
  
  function getCurrentLocation() {
    navigator.geolocation.getCurrentLocation(searchPosition);
    console.log(getCurrentLocation());
  }
  
  let button = document.querySelector("button");
  button.addEventListener("submit", getCurrentLocation);
  