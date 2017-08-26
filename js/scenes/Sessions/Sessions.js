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
    <View style={styles.sessionScene}>
      <View style={styles.sessionHeader}>
        <Text style={styles.sessionLocation} >{sessionData.location}</Text>
        <Text style={styles.sessionTitle}>{sessionData.title}</Text>  
        <Text style={styles.sessionTime}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>                            
        <Text style={styles.sessionBody}>{sessionData.description}</Text>
        <Text style={styles.sessionLocation}>Presented by:</Text>
        <TouchableOpacity onPress={() => goToSpeaker(speakerData)} >
          <View style={styles.sessionSpeaker}>
            <Image
              style={styles.speakerAvatar}
              source={{ uri: speakerData.image }}
            />
            <Text style={styles.speakerName}>{speakerData.name}</Text>   
          </View>  
        </TouchableOpacity>                             
      </View>
      <View style={styles.buttonBox}>
        <Button
          title='Add to Faves'
          onPress={() => console.log('hey')}
        />
      </View>  
    </View>
  )
}

export default Sessions;