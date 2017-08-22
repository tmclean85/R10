import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import { styles } from './styles';

const About = () => (
  <View 
    style={styles.container}
    ItemSeparatorComponent={() => {
      <View
        style={styles.border}
      />
    }}
  >
    <Image
      style={styles.headerImage}
      source={require('../../assets/images/r10_logo.png')}
    />
  </View>    
);

About.propTypes = {
  
}

export default About;