import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import { styles } from './styles';

const About = ({ data }) => (
  <View>
    <View
      style={styles.container}
    >
      <Image
        style={styles.headerImage}
        source={require('../../assets/images/r10_logo.png')}
      />
    </View>
    <View
      style={styles.list}
    >
      <FlatList
        data={data}
        renderItem={({item}) =>
          <View style={styles.codeItem}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>            
          </View>  
        }
        keyExtractor={(item, index) => index}
      />
    </View>
  </View>  
);

About.propTypes = {
  
}

export default About;