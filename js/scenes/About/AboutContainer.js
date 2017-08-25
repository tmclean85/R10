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
    duration: 500,
    update: {
      type: 'easeInEaseOut',
    }
  }

  itemExpander(i) {
    LayoutAnimation.configureNext(this.animator);
    if (this.state.shown === i) {
      this.setState({shown: null})
    } else {  
      this.setState({shown: i});
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
               itemExpander={(id) => this.itemExpander(id)}
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