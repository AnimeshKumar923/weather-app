import "./style.css";

let isCelsius = true;

document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  callWeatherApi();
});

document.getElementById("toggle-unit").addEventListener("click", () => {
  isCelsius = !isCelsius;
  updateWeatherDisplay();
});

async function callWeatherApi(){
  const weatherInfo = document.querySelector(".weather-info");
  const API_KEY = `TR2FDSJYXDW8L6KKDBV9AZAJR`;
  let location = document.querySelector("#city").value;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`,
  );
  console.log(response);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Complete Weather Data:", data);
  console.log(typeof data);

  const days = data.days;
  days.forEach((day) => {
    console.log(day);
    let infoField = document.createElement('div');
    infoField.classList.add('weather-card');
    infoField.innerHTML = `
      <h2>Weather in ${location} on ${day.datetime}</h2>
      <p>Temperature: ${day.temp}°F</p>
      <p>Max Temp: ${day.tempmax}°F</p>
      <p>Min Temp: ${day.tempmin}°F</p>
      <p>Conditions: ${day.conditions}</p>
    `;
    weatherInfo.appendChild(infoField);
  });
}