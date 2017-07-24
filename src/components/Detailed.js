import React from 'react';

export default function Detailed(props) {
  const weatherProp = props.location.state.dailyWeather;
  const { min, max } = weatherProp.temp;
  const { description, icon } = weatherProp.weather[0];
  const city = weatherProp.city;
  const humidity = weatherProp.humidity;
  const information = [description, min, max, humidity];
  return (
    <div>
      <div>
        <img src={`../../assets/weather-icons/${icon}.svg`}></img>
        <h2>{city}</h2>
      </div>
      <div>
        {information.map((data, index) => <li key={index}>{data}</li>)}
      </div>
    </div>
  );
}

