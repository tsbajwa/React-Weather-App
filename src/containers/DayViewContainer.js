import React from 'react';
import DayView from '../components/DayView'
import getDate from '../util/helpers';
import { Redirect } from 'react-router-dom';

export default class DayViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      dailyWeather: {},
    };
  }
  handleClick = (dailyWeather) => {
    dailyWeather.city = this.city;
    this.setState({ redirect: true, dailyWeather });
  }

  render() {
      console.log(this.props)
    if (this.state.redirect) {
      return <Redirect to = {{
        pathname: '/detailed',
        state: { dailyWeather: this.state.dailyWeather },
      }} />;
    }

    let view = this.props.weather.map(dailyWeather => <DayView onClick ={() => this.handleClick(dailyWeather)} dailyWeather={dailyWeather} key={dailyWeather.dt}/>)
    return (
      <div>
        {view}
      </div>
    )
  }

}
