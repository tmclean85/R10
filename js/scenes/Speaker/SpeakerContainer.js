import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About the Speaker',
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

export default SpeakerContainer;