import React from 'react';

export default function DayView(props) {
  return (
    <div>
      <img src={`../../assets/weather-icons/${props.icon}.svg`}></img>
      {props.date}
    </div>
  );
}
