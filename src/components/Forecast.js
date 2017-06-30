import React from 'react';
import DayView from './DayView';
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
    .then((weatherData) => {
      this.setState((prevState) => {
        console.log(weatherData.data.list[0])
        return { weather: weatherData.data.list, loading: !prevState.loading };
      });
    });
  }

  render() {
    const loading = this.state.loading;
    let dayView;
    if (loading) {
      dayView = 'Loading';
    } else {
      dayView = <DayView
      icon={this.state.weather[0].weather[0].icon}
      date={this.state.weather[0].dt_txt}
      />;
    }
    return (
      <div>
        { dayView }
      </div>
      
    );
  }
}

module.exports = Forecast;

// Do we need to use queryString module?
// {loading ? 'Loading Data' : 'Data has loaded'}