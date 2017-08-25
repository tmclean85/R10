import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import Map from './Map';

class MapContainer extends Component {
  
  static route = {
    navigationBar: {
      title: 'Map',
    }
  }

  render() {
    return (
      <Map />
    )
  }

}

export default MapContainer;
