import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const Schedule = ({ data, singleSession }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => singleSession(item)} >
            <View>
              <View style={styles.sectionContent}>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>  
              <View style={styles.sectionFooter}>
                <Text style={styles.locationText}>{item.location}</Text>
              </View>  
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={(item) => (
          <Text style={styles.sectionHeader}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}
        sections={data}
      />
    </View>
  );
};

export default Schedule;
