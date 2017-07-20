import React from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import DayView from './DayView';
import weatherDataRetreival from './util/api';

class Forecast extends React.Component {
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
  handleClick = (dailyWeather) => {
    dailyWeather.city = this.city;
    this.setState({ redirect: true, dailyWeather });
  }

  render() {
    const loading = this.state.loading;
    let dayView;

    if (this.state.redirect) {
      return <Redirect to = {{
        pathname: '/detailed',
        state: { dailyWeather: this.state.dailyWeather },
      }} />;
    }

    if (loading) {
      dayView = 'Loading';
    } else {
      dayView = this.state.weather.map(dailyWeather => <DayView onClick ={() => this.handleClick(dailyWeather)} dailyWeather={dailyWeather} key={dailyWeather.dt}/>);
    }
    return (
      <div className='forecast-container'>
        { dayView }
      </div>
    );
  }
}

module.exports = Forecast;
