import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import Sessions from './Sessions';
import { getSpeakerData } from '../../redux/modules/sessions';


class SessionsContainer extends Component {
  
  componentDidMount() {
    console.log(getSpeakerData(this.props.sessionData.speaker));
    this.props.dispatch(getSpeakerData(this.props.sessionData.speaker));
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
      console.log(this.props.speakerData, this.props.sessionData.item)
      return (
        <Sessions
          sessionData={this.props.sessionData}
          speakerData={this.props.speakerData}
        />
      );
    }
  }

}

function mapStateToProps(state) {
  return {
    speakerData: state.session.speakerData,
    loading: state.session.loading
  }
}

export default connect(mapStateToProps)(SessionsContainer);