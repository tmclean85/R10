import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import Favs from './Favs';
import { getFavesData } from '../../redux/modules/faves';
import realm from '../../config/model';

class FavsContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  componentDidMount() {
    this.props.dispatch(getFavesData());
    realm.addListener('change', () => this.props.dispatch(getFavesData()));
  }

  render() {
    if(this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />        
      )
    } else {
      return (
        <Favs
          faveIds={this.props.faveIds}
          faveData={this.props.faveData}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    faveIds: state.faves.faveIds,
    faveData: state.faves.faveData,
    loading: state.faves.loading
  }
}


export default connect(mapStateToProps)(FavsContainer);