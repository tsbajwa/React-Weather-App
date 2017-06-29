import React from 'react';

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
    console.log(city);
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
