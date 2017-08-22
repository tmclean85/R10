import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import Schedule from './Schedule';

class ScheduleContainer extends Component {

  constructor() {
    super();
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
  return (<Schedule />);
  }
}

export default ScheduleContainer;