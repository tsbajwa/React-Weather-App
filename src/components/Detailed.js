import React from 'react';

export default function Detailed(props) {
  const { temp_min: tempMin, temp_max: tempMax, humidity } = props.location.state.dailyWeather.main;
  const description = props.location.state.dailyWeather.weather[0].description;
  const city = props.location.state.dailyWeather.city;
  const information = [city, description, tempMin, tempMax, humidity];
  return (
    <div>
    {information.map((data, index) => <li key={index}>{data}</li>)}
    </div>
  );
}

// Need to bring in location prop
