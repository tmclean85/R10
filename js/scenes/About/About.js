import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const About = ({ data }) => (
  <ScrollView>
    <View style={styles.container}>
      <View
        style={styles.headerContainer}
      >
        {/* <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} style={Platform.OS === 'android' ? {color: 'red'} : {color: 'blue'}} size={16} /> */}
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View
        style={styles.headerInfo}
      >
        <Text style={styles.headerText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text style={styles.text}>Date & Venue</Text>
        <Text style={styles.headerText}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
        <Text style={styles.text}>Code of Conduct</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({item}) =>
          <View style={styles.container}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>            
          </View>
        }
        keyExtractor={(item, index) => index}
      />
    </View>
  </ScrollView>
);

About.propTypes = {
  
}

export default About;