import React from 'react';
import { Link } from 'react-router-dom';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value });
  }

  render() {
    return (
      <div>
          <input type='text' value={this.state.location} onChange={this.handleChange}></input>
          <Link to= {{
            pathname: '/forecast',
            search: `?city=${this.state.location}`,
          }}>Get Weather</Link>
      </div>
    );
  }
}

module.exports = LocationForm;
