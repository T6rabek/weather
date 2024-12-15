const apiKey = '257d654363ef3cfa0697a93e483dbfc3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather() {
  const cityName = document.querySelector('.city-name').value;
  const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    document.querySelector('.error').style.display = 'none';
    let data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if (data.weather[0].main === 'Clear') {
      weatherIcon.src = 'assets/clear.png';
    } else if (data.weather[0].main === 'Clouds') {
      weatherIcon.src = 'assets/clouds.png';
    } else if (data.weather[0].main === 'Drizzle') {
      weatherIcon.src = 'assets/drizzle.png';
    } else if (data.weather[0].main === 'Rain') {
      weatherIcon.src = 'assets/rain.png';
    } else if (data.weather[0].main === 'Mist') {
      weatherIcon.src = 'assets/mist.png';
    } else if (data.weather[0].main === 'Snow') {
      weatherIcon.src = 'assets/snow.png';
    }
    document.querySelector('.weather').style.display = 'block';
  }
}
document.querySelector('.check-button').addEventListener('click', checkWeather);
