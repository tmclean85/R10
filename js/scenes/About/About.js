import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const About = ({ data, itemExpander, shown }) => (
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
        <View style={styles.box}>
          <Text style={styles.topText}>Date & Venue</Text>
        </View>
        <Text style={styles.headerText}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
        <View style={styles.box}>
          <Text style={styles.topText}>Code of Conduct</Text>
        </View>
      </View>
        {
          data.map((item, i) => (
            <View key={i} style={styles.list}>
              <TouchableOpacity 
                onPress={() => itemExpander(i)}
              >
                <Text style={styles.conductTitle}>
                  { (i === shown) ? '- ' : '+ ' } 
                  {item.title}
                </Text>
                {
                  (i === shown) &&
                    <Text>
                      {item.description}
                    </Text>
                }
              </TouchableOpacity>  
            </View>
            ))
        }
    </View>
    <View style={{ marginTop: 20, paddingLeft: 30, paddingBottom: 10, fontSize: 16 }}>
      <Text>
        © RED Academy 2017
      </Text>  
    </View>  
  </ScrollView>
);

About.propTypes = {
  
}

export default About;