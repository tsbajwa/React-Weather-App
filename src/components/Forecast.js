import React from 'react';
import queryString from 'query-string';
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
    const parsedUrl = queryString.parse(this.props.location.search)
    this.getWeather(parsedUrl.city);
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
  handleClick() {
    console.log('Clicks were made');
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
          onClick ={() => this.handleClick()}
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
