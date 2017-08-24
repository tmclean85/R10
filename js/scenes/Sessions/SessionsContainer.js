import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { ActivityIndicator } from 'react-native';
import Sessions from './Sessions';

import { getSessionData } from '../../redux/modules/sessions';


class SessionsContainer extends Component {
  
  componentDidMount() {
    const theSpeaker = this.props.sessionData.item.speaker;
    this.props.dispatch(getSpeakerData(theSpeaker));
  }

  singleSpeaker(speakerData) {
    goToSpeaker(speakerData);
  }

  static route = {
    navigationBar: {
      title: 'Sessions',
    }
  }
  render() {
    if(this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />        
      )
    } else {
        return (
          <Sessions
            sessionData={this.props.sessionData.item}
            speakerData={this.props.speakerData}
            goToSpeaker={this.singleSpeaker}
          />);      
    }
  }
}

function mapStateToProps(state) {
  return {
    speakerData: state.session.speaker,
    loading: state.session.loading
  }
}

export default connect(mapStateToProps)(SessionsContainer);