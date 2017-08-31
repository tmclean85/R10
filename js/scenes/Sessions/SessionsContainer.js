import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import Sessions from './Sessions';
import { getSpeakerData } from '../../redux/modules/sessions';


class SessionsContainer extends Component {
  
  componentDidMount() {
    this.props.dispatch(getSpeakerData(this.props.sessionData.speaker));
  }

  static route = {
    navigationBar: {
      title: 'Session',
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
          faveIds={this.props.faveIds}
        />
      );
    }
  }

}

function mapStateToProps(state) {
  return {
    speakerData: state.session.speakerData,
    loading: state.session.loading,
    faveIds: state.faves.faveIds
  }
}

SessionsContainer.propTypes = {
  sessionData: PropTypes.shape({
    description: PropTypes.string,
    location: PropTypes.string,
    session_id: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
    speaker: PropTypes.string
  }),
  speakerData: PropTypes.objectOf(PropTypes.string),
  faveIds: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
}


export default connect(mapStateToProps)(SessionsContainer);