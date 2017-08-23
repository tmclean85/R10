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

  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //     loading: true
  //   }
  // }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  // componentDidMount() {
  //   let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ data });
  //     })
  //     .catch(error => console.log(`Error fetching JSON: ${error}`));    
  // }

  
  
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