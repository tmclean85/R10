import React, { Component } from 'react';
//ex-nav imports
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text
} from 'react-native';

import Router from './routes'
import { colors, typography } from '../config/styles'

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'red'
  },

};

class NavigationLayout extends Component {

  render() {
    //render tab bar component with nested tab items and stacknavs
    return (
      <TabNavigation
        id="tabMain"
        initialTab="about"
        tabBarColor="grey"
      >
        <TabItem
          id="schedule"
          title="Schedule"
          renderIcon={(isSelected) => this.renderIcon("ios-calendar", isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="map"
          title="Map"
          renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute('map')}
            defaultRouteConfig={defaultRouteConfig}            
          />
        </TabItem>
        <TabItem
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
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          renderTitle={this.renderTitle}                    
        >
          <StackNavigation
            id="about"
            navigatorUID="About"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}            
          />
        </TabItem>
      </TabNavigation>
    );
  }

  renderIcon(iconName, isSelected) {
    const color = isSelected ? 'white' : '#999999';
    return <Icon name={iconName} size={24} color={color} />
  }

  renderTitle(isSelected, title) {
    const color = isSelected ? 'blue' : '#999999';
    titles = {
      color: color,
      fontFamily: typography.fontMain,
      fontSize: typography.baseSize
    }
    return (
      <Text>{title}</Text>
    )  
    //return text component
  }



}


export default NavigationLayout;