import React from 'react';

export default function DayView(props) {
  const icon = props.dailyWeather.weather[0].icon;
  const date = props.dailyWeather.dt;
  return (
    <div className='dayview'onClick = {() => props.onClick()}>
      <img className='dayview__img' src={`../../assets/weather-icons/${icon}.svg`}></img>
      <p className='dayview__paragraph'>{date}</p>
    </div>
  );
}
