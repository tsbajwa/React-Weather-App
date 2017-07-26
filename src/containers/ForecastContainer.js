import React from 'react';
import queryString from 'query-string';
import weatherDataRetreival from './../util/api';
import Forecast from '../components/Forecast';

export default class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loading: true,
      city: '',
    };
  }

  componentDidMount = () => {
    console.log(this)
    this.setState(() => ({ city: queryString.parse(this.props.location.search).city }));
    this.getWeather(this.city); //Why not this.state.city?
  }
  getWeather = (city) => {
    weatherDataRetreival(city)
    .then((weatherData) => {
      this.setState(prevState => ({ weather: weatherData.data.list, loading: !prevState.loading }));
    });
  }

  render() {
    const loading = this.state.loading;
    return (
      <div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <Forecast
            city={this.state.city}
            weather={this.state.weather}
          />
        )}
      </div>
    );
  }
}
