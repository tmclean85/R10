import React, { Component } from 'react';
//ex-nav imports
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem as DrawerItem,
} from '@expo/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text
} from 'react-native';

import Router from './routes';
import { colors, typography } from '../config/styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'red'
  },
  // renderBackground: () => (
  //   //return linear gradient
  // )
};

class NavigationLayout extends Component {

  render() {
    return (
      <DrawerNavigation
        id="tabMain"
        initialItem="about"
      >
        <DrawerItem
          id="about"
          title="About"
          renderIcon={(isSelected) => this.renderIcon("ios-calendar", isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
        <DrawerItem
          id="schedule"
          title="Schedule"
          renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}            
          />
        </DrawerItem>
        <DrawerItem
          id="favs"
          title="Favs"
          renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
          renderTitle={this.renderTitle}          
        >
          <StackNavigation
            id="favs"
            navigatorUID="favs"
            initialRoute={Router.getRoute('favs')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
        <DrawerItem
          id="sessions"
          title="Sessions"
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="sessions"
            navigatorUID="sessions"
            initialRoute={Router.getRoute('sessions')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
      </DrawerNavigation>
    );
  }

  renderIcon(iconName, isSelected) {
    const color = isSelected ? 'black' : '#999999';
    return <Icon name={iconName} size={24} color={color} />
  }

  renderTitle(isSelected, title) {
    const color = isSelected ? 'black' : '#999999';
    titles = {
      color: color,
      fontFamily: typography.fontMain,
      fontSize: typography.baseSize
    }
    return (
      <Text>{title}</Text>
    )  
  }

}


export default NavigationLayout;