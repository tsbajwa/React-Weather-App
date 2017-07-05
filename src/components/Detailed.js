import React from 'react';

export default function Detailed(props) {
  const { temp_min: tempMin, temp_max: tempMax, humidity } = props.location.state.dailyWeather.main;
  const description = props.location.state.dailyWeather.weather[0].description;
  const information = [tempMin, tempMax, humidity, description];
  return (
    <div>
     {tempMin}
     {tempMax}
     {humidity}
     {description}
    </div>
  );
}

// Need to bring in location prop
