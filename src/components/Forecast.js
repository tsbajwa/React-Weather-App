import React from 'react';
import DayViewContainer from '../containers/DayViewContainer';

export default function Forecast(props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <h2>Five Day Forecast</h2>
      <DayViewContainer
        weather={props.weather}
        city={props.city}
      />
    </div>
  );
}
