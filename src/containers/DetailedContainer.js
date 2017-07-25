import React from 'react';
import Detailed from '../components/Detailed';

export default function DetailedContainer(props) {
  const weatherProp = props.location.state.dailyWeather;
  const { min, max } = weatherProp.temp;
  const { description, icon } = weatherProp.weather[0];
  const city = weatherProp.city;
  const humidity = weatherProp.humidity;

  return (
    <Detailed 
    city={city}
    icon={icon}
    description={description}
    min={min}
    max={max}
    humidity={humidity}
    />
  );
}
