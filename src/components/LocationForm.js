import React from 'react';
import { Link } from 'react-router-dom';

export default function LocationForm(props) {
  return (
    <div>
      <input type='text' placeholder='Sydney, Australia'value={props.location} onChange={props.handleChange}></input>
      <Link to= {{
        pathname: '/forecast',
        search: `?city=${props.location}`,
      }}>Get Weather</Link>
    </div>
  );
}

