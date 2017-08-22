
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import About from './scenes/About';

export default class R10 extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <About />
      </View>
    );
  }
}


AppRegistry.registerComponent('R10', () => R10);
