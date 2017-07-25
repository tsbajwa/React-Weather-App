import React from 'react';
import DayView from '../components/DayView'
import getDate from '../util/helpers';

export default function DayViewContainer(props) {
  const icon = props.dailyWeather.weather[0].icon;
  const date = getDate(props.dailyWeather.dt);

  return (
    <DayView
      icon={icon}
      date={date}
      onClick={props.onClick}
    />
  );
}
