let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
alert("Welcome to the weather app!");
let city = prompt("Enter your city name").toLowerCase();
if (city in weather) {
  let temp = weather[city].temp;
  let humidity = weather[city].humidity;
  alert(
    `The temperature in ${city} is currently ${temp} °C and the humidity is ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+in+${city}`
  );
}
