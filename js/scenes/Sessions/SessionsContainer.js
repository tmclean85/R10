import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import Sessions from './Sessions';

class SessionsContainer extends Component {
  constructor() {
    super();
  }

  static route = {
    navigationBar: {
      title: 'Sessions',
    }
  }

  render() {
    return (<Sessions />);
  }

}


export default SessionsContainer;