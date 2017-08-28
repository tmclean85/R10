import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Map extends Component {

  static route = {
    navigationBar: {
      title: 'Map'
    }
  }

  render(){
    return(
      <View>
        <Text>
          Dis map.
        </Text>
      </View>    
    )  
  }
}

export default Map;
