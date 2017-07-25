import React from 'react';
import LocationForm from '../components/LocationForm';

export default class LocationFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value });
  }

  render() {
    return (
    <LocationForm
      location={this.state.location}
      handleChange={this.handleChange}
    />
    );
  }
}
