import React from 'react';
import { Redirect } from 'react-router-dom';
import DayView from '../components/DayView';
import { getDate } from '../util/helpers';

export default class DayViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      dailyWeather: {},
    };
  }
  handleClick = (dailyWeather) => {
    dailyWeather.city = this.props.city;
    this.setState({ redirect: true, dailyWeather });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to = {{
        pathname: '/detailed',
        state: { dailyWeather: this.state.dailyWeather },
      }} />;
    }

    const view = this.props.weather.map(dailyWeather => <DayView onClick ={() => this.handleClick(dailyWeather)} icon={dailyWeather.weather[0].icon} date={getDate(dailyWeather.dt)} key={dailyWeather.dt}/>);
    return (
      <div className='dayViewContainer'>
        {view}
      </div>
    );
  }

}
