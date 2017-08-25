import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { connect } from 'react-redux';
import { 
  ActivityIndicator,
  LayoutAnimation        
} from 'react-native';
import About from './About';
import { getConductData } from '../../redux/modules/conduct';

class AboutContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shown: null
    }
  }

  componentDidMount() {
    this.props.dispatch(getConductData()); 
  }

  animator = {
    duration: 1000,
    update: {
      type: 'spring',
      springDampen: 0.2
    }
  }

  itemExpander(id) {
    LayoutAnimation.configureNext(this.animator)
    if (id === this.state.shown) {
      id = null 
      this.setState({shown: id});
    }  
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
      return <About 
               data={this.props.data} 
               itemExpander={(id) => this.itemExpander}
               shown={this.state.shown}
             />;
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