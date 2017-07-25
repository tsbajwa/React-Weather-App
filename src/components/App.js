import React from 'react';
import LocationFormContainer from '../containers/LocationFormContainer';

export default function App() {
  return (
    <div className='home'>
      <div>
        <h1>Enter City and State</h1>
        <LocationFormContainer />
        </div>
    </div>
  );
}

