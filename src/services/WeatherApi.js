import axios from 'axios'

const WeatherKey = '1e8c7ab526af9166de84acd9a3bddfa8'

const getWeatherInfo = async (location) => {
  return await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${location.lat}&lon=${location.lng}&cnt=15&units=metric&APPID=${WeatherKey}`)
}

export default getWeatherInfo;