function change(event) {
  event.preventDefault();
  alert("searching...");
  let cityInputElement = document.querySelector("#search-input");
  alert(cityInputElement.value);
  //let cityName = cityInputElement.value;
  let currentCity = document.querySelector("#current-city");
  if (cityInputElement.value) {
    currentCity.innerHTML = `${cityName}`;
  } else {
    currentCity.innerHTML = null;
    alert("Please enter a city name.");
  }
}
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", change);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
//let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()]; //now.getday() = 0 - 6
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
currentDate.innerHTML = `${day} ${hours}:${minutes}, moderate rain`;
