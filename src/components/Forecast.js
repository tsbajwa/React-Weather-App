import React from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import DayView from './DayView';
import weatherDataRetreival from './util/api';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loading: true,
      redirect: false,
      dailyWeather: {},
    };
  }
  componentDidMount = () => {
    const parsedUrl = queryString.parse(this.props.location.search);
    this.getWeather(parsedUrl.city);
  }
  getWeather = (city) => {
    weatherDataRetreival(city)
    .then((weatherData) => {
      this.setState(prevState => ({ weather: weatherData.data.list, loading: !prevState.loading }));
    });
  }
  handleClick = (dailyWeather) => {
    this.setState({ redirect: true, dailyWeather });
    console.log(dailyWeather);
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
      dayView = this.state.weather.map(dailyWeather => <DayView onClick ={() => this.handleClick.call(null, dailyWeather)} dailyWeather={dailyWeather} key={dailyWeather.dt}/>);
    }
    return (
      <div>
        { dayView }
      </div>
    );
  }
}

module.exports = Forecast;
