import React from 'react';
import getDate from './../util/helpers';

export default function DayView(props) {
  const icon = props.dailyWeather.weather[0].icon;
  const date = getDate(props.dailyWeather.dt);
  return (
    <div className='dayview'onClick = {() => props.onClick()}>
      <img className='dayview__img' src={`../../assets/weather-icons/${icon}.svg`}></img>
      <p className='dayview__paragraph'>{date}</p>
    </div>
  );
}
