import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import About from './About';
import { getConductData } from '../../redux/modules/conduct';

class AboutContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getConductData()); 
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  
  render() {
    if(this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return <About data={this.props.data} />;
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.conduct.data,
    loading: state.conduct.loading
  }  
}

export default connect(mapStateToProps)(AboutContainer);