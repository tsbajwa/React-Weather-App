import axios from 'axios';

// Want a function to make the URL which we will make the call with

export default function weatherDataRetreival(city) {
  const URL = `http://api.openweathermap.org/data/2.5/forecast${city}&APPID=9b9bc8f9e7e2c636ea06d9c3a882724a&cnt=5`;
  return axios.get(URL);
}

