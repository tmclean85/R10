import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

import ScheduleList from '../../components/ScheduleList/';

const Favs = ({ faveData, faveIds }) => {
  return (
    <ScheduleList
      data={faveData}
      faves={faveIds}
      navigatorUID={'faves'}
    />
  )
}

export default Favs;