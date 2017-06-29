import React from 'react';
import weatherDataRetreival from './util/api';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loading: true,
    };
  }
  componentDidMount = () => {
    const city = this.props.location.search;
    this.getWeather(city);
  }

  getWeather = (city) => {
    weatherDataRetreival(city)
    .then((data) => { 
      this.setState((prevState) => {
        return { weather: data.data.list, loading: !prevState.loading };
      });
    });
  }

  render() {
    return (
      <div>
        Forecast div!!
      </div>
    );
  }
}

module.exports = Forecast;

// Do we need to use queryString module?
