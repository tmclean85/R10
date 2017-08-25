import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import Favs from './Favs';

class FavsContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Favs',
    }
  }

  render() {
    return (<Favs />);
  }

}


export default FavsContainer;