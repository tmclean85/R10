import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import { getScheduleData } from '../../redux/modules/schedule';


class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getScheduleData());
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    if(this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
    return (<Schedule data={this.props.data} />);
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.schedule.data,
    loading: state.schedule.loading
  }
}

export default connect(mapStateToProps)(ScheduleContainer);