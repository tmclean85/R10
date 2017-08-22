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
      style={styles.headerContainer}
    >
      <Image
        style={styles.headerImage}
        source={require('../../assets/images/r10_logo.png')}
      />
    </View>
    <View
      style={styles.headerInfo}
    >
    <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
    <Text>Date & Venue</Text>
    <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
    <Text>Code of Conduct</Text>
    </View>  
    <FlatList
      style={styles.list}
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
);

About.propTypes = {
  
}

export default About;