import React from 'react';

export default function Detailed(props) {
  return (
    <div>
      <div>
        <img src={`../../assets/weather-icons/${props.icon}.svg`}></img>
        <h2>{props.city}</h2>
      </div>
      <div>
        <p>{props.description}</p>
        <p>Min: {props.min}</p>
        <p>Max: {props.max}</p>
        <p>Humidity: {props.humidity}</p>
      </div>
    </div>
  );
}

