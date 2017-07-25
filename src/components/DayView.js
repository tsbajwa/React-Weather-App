import React from 'react';

export default function DayView(props) {
  return (
    <div className='dayview' onClick = {() => props.onClick()}>
      <img className='dayview__img' src={`../../assets/weather-icons/${props.icon}.svg`}></img>
      <p className='dayview__paragraph'>{props.date}</p>
    </div>
  );
}
