import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { addFave, deleteFave } from '../../config/model';
import Button from '../../components/Button/';
import { goToSpeaker } from '../../lib/navigationHelpers';
import { styles } from './styles';

const Sessions = ({ sessionData, speakerData, faveIds }) => {
  const foundFave = faveIds.find(faveId => faveId === sessionData.session_id);
  return (
    <ScrollView>
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
          {(speakerData)
            ?       
              <Button
                text={
                  (foundFave)
                    ? "Remove from Faves"
                    : "Add to Faves"
                }
                onPress={
                  (foundFave)
                    ? () => deleteFave(sessionData.session_id)
                    : () => addFave(sessionData.session_id)
                }
              />
            : null
          }    
        </View>  
      </View>
    </ScrollView>  
  )
}

Sessions.propTypes = {
  sessionData: PropTypes.shape({
    description: PropTypes.string,
    location: PropTypes.string,
    session_id: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
    speaker: PropTypes.string
  }),
  speakerData: PropTypes.objectOf(PropTypes.string),
  faveIds: PropTypes.arrayOf(PropTypes.string)
}

export default Sessions;