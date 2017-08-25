import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { goToSpeaker } from '../../lib/navigationHelpers';
import { styles } from './styles';

const Sessions = ({ sessionData, speakerData, singleSpeaker }) => {
  return (
    <View>
      <View>
        <Text>{sessionData.location}</Text>
        <Text>{sessionData.title}</Text>
        <Text>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
        <Text>{sessionData.description}</Text>
        <Text>Presented by:</Text>
      </View>
      <TouchableOpacity onPress={() => goToSpeaker(speakerData)} >
        <View>
          <Text>{speakerData.name}</Text>
          <Image
            style={styles.speakerAvatar}
            source={{ uri: speakerData.image }}
          />        
        </View>  
      </TouchableOpacity>  
      <View>
      <Button
        
        title=""
        color=""
        accessibilityLabel=""
      />
      </View>  
    </View>
  )
}

export default Sessions;