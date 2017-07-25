import React from 'react';
import LocationFormContainer from '../containers/LocationFormContainer';

export default function Nav() {
  return (
    <div className='navbar'>
     <h1>Weather App</h1>
     <LocationFormContainer />
    </div>
  );
}
