
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation
} from '@expo/ex-navigation';
import Router from './navigation/routes';



export default class R10 extends Component {
  render() {
    return (
      <NavigationProvider 
        router={Router}
        navigatorUID="root"
        id="root"
      >
        <StackNavigation initialRoute={Router.getRoute('about')} />
      </NavigationProvider>      
    );
  }
}


AppRegistry.registerComponent('R10', () => R10);
