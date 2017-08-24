import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {
  View,
  Text,
  FlatList,
  Image
} from 'react-native';

import { styles } from './styles';

const Sessions = ({ sessionData, speakerData }) => {
  return (
    <View>
      <View>
        <Text>{sessionData.location}</Text>
        <Text>{sessionData.title}</Text>
        <Text>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>   
        <Text>{sessionData.description}</Text>
        <Text>Presented by:</Text>
      </View>
      {(speakerData)
        ? <View>
            <Text>{speakerData.name}</Text>
            <Image
              source={{ uri: speakerData.image }}
            />
          </View>
        : null  
      }
    </View>  
  )
}

export default Sessions;