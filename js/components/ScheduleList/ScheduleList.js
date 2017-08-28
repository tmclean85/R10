import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,
  ItemSeparatorComponent,
  Platform
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { goToSession } from '../../lib/navigationHelpers';
import { styles } from './styles';

const ScheduleList = ({ data, faves, navigatorUID }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToSession(navigatorUID, item)}>
            <View style={styles.scheduleWrapper}>
              <Text style={styles.scheduleHeader}>{item.title}</Text>
              <Text style={styles.scheduleSubHeader}>{item.location}</Text>
              <View>
                {
                  (faves.find(fave => fave === item.session_id)) 
                    ? <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={17} style={styles.scheduleIcon} />
                    : null
                }
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={(item) => (
          <View style={styles.scheduleHeaderBar}>
            <Text style={styles.scheduleTime}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
          </View>  
        )}
        sections={data}
      />
    </View>
  );
}

export default ScheduleList;