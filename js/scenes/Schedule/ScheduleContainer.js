import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import realm from '../../config/model';
import { goToSession } from '../../lib/navigationHelpers';
import { getSessionData } from '../../redux/modules/schedule';
import { getFavesData } from '../../redux/modules/faves';

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getSessionData());
    this.props.dispatch(getFavesData());    
    realm.addListener('change', () => this.props.dispatch(getFavesData()));
  }

  singleSession(item) {
    goToSession("schedule", item);
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    if(this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return (
        <Schedule 
          data={this.props.data} 
          singleSession={this.singleSession}
          faveIds={this.props.faveIds}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.schedule.sessionData,
    loading: state.schedule.loading,
    faveIds: state.faves.faveIds
  }
}

ScheduleContainer.PropTypes = {
  goToSession: PropTypes.func,
  faveIds: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
    start_time: PropTypes.number,
    session_id: PropTypes.string
  })),
}

export default connect(mapStateToProps)(ScheduleContainer);