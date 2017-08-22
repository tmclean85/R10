import React, { Component } from 'react';
import About from './About';

class AboutContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));    
  }

  static propTypes = {
    
  };
  
  
  render() {
    return <About />;
  }
}

export default AboutContainer;