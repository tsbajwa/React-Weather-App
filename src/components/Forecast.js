import React from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import DayViewContainer from '../containers/DayViewContainer';
import weatherDataRetreival from './../util/api';

export default class Forecast extends React.Component {
  state = {
    weather: [],
    loading: true,
    redirect: false,
    dailyWeather: {},
  }
  componentDidMount = () => {
    this.city = queryString.parse(this.props.location.search).city;
    this.getWeather(this.city);
  }
  getWeather = (city) => {
    weatherDataRetreival(city)
    .then((weatherData) => {
      this.setState(prevState => ({ weather: weatherData.data.list, loading: !prevState.loading }));
    });
  }


  render() {
    const loading = this.state.loading;
    let dayView;

    if (loading) {
      dayView = 'Loading';
    } else {
      dayView = <DayViewContainer
        weather={this.state.weather}
      />;
    }
    return (
      <div className='forecast-container'>
        <div>
          <h1>{this.city}</h1>
          <h2>Five Day Forecast</h2>
        </div>
        <div className='forecast-container__dayview'>
          { dayView }
        </div>
      </div>
    );
  }
}
