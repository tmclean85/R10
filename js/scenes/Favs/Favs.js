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

Favs.PropTypes = {
  faveIds: PropTypes.arrayOf(PropTypes.string),
  faveData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    start_time: PropTypes.number,
    description: PropTypes.string,
    speaker: PropTypes.string,
    session_id: PropTypes.string
  }))
}


export default Favs;