import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { connect } from 'react-redux';
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
    return <About data={this.props.data} />;
  }
}

function mapStateToProps(state) {
  return {
    data: state.conduct.data,
    loading: state.conduct.loading
  }  
}

export default connect(mapStateToProps)(AboutContainer);