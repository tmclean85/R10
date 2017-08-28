import React, { Component } from 'react';

import Map from './Map';

class MapContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Maps',
    }
  }

  render() {
    return (
      <Map />
    );
  }
}

export default MapContainer;