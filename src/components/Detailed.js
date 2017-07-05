import React from 'react';

export default function Detailed(props) {
  const weatherProp = props.location.state.dailyWeather;
  const { temp_min: tempMin, temp_max: tempMax, humidity } = weatherProp.main;
  const description = weatherProp.weather[0].description;
  const city = weatherProp.city;
  const information = [city, description, tempMin, tempMax, humidity];
  return (
    <div>
    {information.map((data, index) => <li key={index}>{data}</li>)}
    </div>
  );
}

// Need to bring in location prop
