const apiKey = "253682c0bd759acfb4255d4aa08c3dd7"; // Use your OpenWeatherMap API key
const weatherInfo = document.getElementById("weatherInfo");
const getWeatherButton = document.getElementById("getWeather");

getWeatherButton.addEventListener("click", () => {
  const city = document.getElementById("city").value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},US&units=imperial&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <img src="${icon}" alt="${weather[0].description}" />
    <p>Temperature: ${main.temp} °F 🌡️</p>
    <p>Humidity: ${main.humidity}% 💧</p>
    <p>Condition: ${weather[0].description} ☁️</p>
  `;
}
