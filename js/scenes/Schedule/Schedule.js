import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {
  View,
  Text,
  SectionList
} from 'react-native';

import { styles } from './styles';

const Schedule = ({ data }) => {
  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={(item) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        renderSectionHeader={(dateItem) => (
          <Text>{Moment.unix(dateItem.start_time).format('h:mm A')}</Text>
        )}
        sections={data}
      />
    </View>
  );
};

export default Schedule;
