import React from 'react';
import queryString from 'query-string';
import weatherDataRetreival from './../util/api';
import { Capitilize } from './../util/helpers';
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
    this.city = queryString.parse(this.props.location.search).city;
    this.setState(() => ({ city: Capitilize(this.city) }));
    this.getWeather(this.city);
  }
  componentWillReceiveProps = () => {
    this.city = queryString.parse(this.props.location.search).city;
    this.setState(() => ({ city: Capitilize(this.city) }));
    this.getWeather(this.city);
  }
  getWeather = (city) => {
    weatherDataRetreival(city)
    .then((weatherData) => {
      this.setState(() => ({ weather: weatherData.data.list, loading: false }));
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