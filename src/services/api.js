import axios from 'axios'
const apiKey = 'b7a9c54f68b1e77435933b708e45d287'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

const getAll = (city, state) => {
  const request = axios.get(`${baseUrl}${city},${state},Australia&units=metric&appid=${apiKey}`)

  return request.then(response => response.data)
}

export default { getAll }