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
    const city = this.props.location.search; // TODO: Use queryString module, to send 'cleaner' city data to api, i.e just cityname without other characters
    this.getWeather(city);
  }
  getWeather = (city) => {
    weatherDataRetreival(city)
    .then((weatherData) => {
      this.setState((prevState) => {
        console.log(weatherData.data.list[0]);
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
      dayView = this.state.weather.map(dailyWeather =>
        (
          <DayView
          dailyWeather={dailyWeather}
          key={dailyWeather.dt}
          />
       ),
      );
    }
    return (
      <div>
        { dayView }
      </div>
    );
  }
}

module.exports = Forecast;
