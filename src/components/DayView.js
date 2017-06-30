import React from 'react';

export default function DayView(props) {
  const icon = props.dailyWeather.weather[0].icon
  const date = props.dailyWeather.dt
  return (
    <div>
      <img src={`../../assets/weather-icons/${icon}.svg`}></img>
      {date}
    </div>
  );
}
