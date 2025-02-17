const API_KEY = `TR2FDSJYXDW8L6KKDBV9AZAJR`;
const weatherInfo = document.querySelector(".weather-info");

document.querySelector(".submit").addEventListener("click", async (e) => {
  e.preventDefault();
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
      <h2>Weather in ${location}</h2>
      <p>Date: ${day.datetime}</p>
      <p>Temperature: ${day.temp}°C</p>
      <p>Max Temp: ${day.tempmax}°C</p>
      <p>Min Temp: ${day.tempmin}°C</p>
      <p>Conditions: ${day.conditions}</p>
    `;
    weatherInfo.appendChild(infoField);
  });
});
