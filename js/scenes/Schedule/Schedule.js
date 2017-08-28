import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {
  View,
  Text,
  ItemSeparatorComponent,
  Platform,
  SectionList,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { goToSession } from '../../lib/navigationHelpers';
import ScheduleList from '../../components/ScheduleList/';
import { styles } from './styles';

const Schedule = ({ data, singleSession, faveIds }) => {
  return (
    <View>
      <ScheduleList
        data={data}
        faves={faveIds}
        navigatorUID={'schedule'}
      />
    </View>
  );
};

export default Schedule;
