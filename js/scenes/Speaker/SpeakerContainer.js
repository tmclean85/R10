import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About the Speaker',
      backgroundColor: 'black',
      color: 'white',
      titleStyle: {
        color: 'white'
      }
    }
  }
  
  render() {
    return (
      <Speaker
        speakerData={this.props.speakerData}
      />
    );
  }

}

SpeakerContainer.PropTypes = {
  speakerData: PropTypes.objectOf(PropTypes.string)
}

export default SpeakerContainer;