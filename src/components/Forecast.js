import React from 'react';
import queryString from 'query-string';
import DayViewContainer from '../containers/DayViewContainer';
import weatherDataRetreival from './../util/api';

export default class Forecast extends React.Component {
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
    let dayView;

    if (loading) {
      dayView = 'Loading';
    } else {
      dayView = <DayViewContainer weather={this.state.weather} city={this.state.city}/>;
    }
    return (
      <div className='forecast-container'>
        <div>
          <h1>{this.state.city}</h1>
          <h2>Five Day Forecast</h2>
        </div>
        <div className='forecast-container__dayview'>
          { dayView }
        </div>
      </div>
    );
  }
}
