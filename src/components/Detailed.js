import React from 'react';

export default function Detailed(props) {
  const weatherProp = props.location.state.dailyWeather;
  const { temp_min: tempMin, temp_max: tempMax, humidity } = weatherProp.main;
  const { description, icon } = weatherProp.weather[0];
  const city = weatherProp.city;
  const information = [city, description, tempMin, tempMax, humidity];
  return (
    <div>
      <div>
        <img src={`../../assets/weather-icons/${icon}.svg`}></img>
        {city}
      </div>
      <div>
        {information.map((data, index) => <li key={index}>{data}</li>)}
      </div>
    </div>
  );
}

