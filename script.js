//Ask the city and alert data about weather in the city
//or the link where to find weather in the other cities that object doesn't have.
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

weather.kharkiv = {};
weather.kharkiv.temp = 23;
weather.kharkiv.humidity = 81;

let whatCity = prompt("Enter a city");
let lowerCase = whatCity.toLowerCase();
if (weather[lowerCase] !== undefined) {
  let weatherInCity = weather[lowerCase];
  let fahrenheitTemp = weatherInCity.temp * 1.8 + 32;
  let capitalize = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  alert(`It is currently ${weatherInCity.temp}°C (${fahrenheitTemp}°F)
 in ${capitalize} with a humidity of
  ${weatherInCity.humidity}%`);
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to 
        https://www.google.com/search?q=weather+${lowerCase}`
  );
}
