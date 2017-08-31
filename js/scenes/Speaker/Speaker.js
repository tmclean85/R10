import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking
} from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';

const Speaker = ({ speakerData }) => {
  return (
    <ScrollView style={styles.speakerScene}>
      <View style={styles.speakerWrapper}>
        <Image
          style={styles.speakerAvatar}
          source={{ uri: speakerData.image }}
        />
        <Text style={styles.speakerName}>{speakerData.name}</Text>
        <Text style={styles.speakerBio}>{speakerData.bio}</Text>
        <Button
          text='Read More on Wikipedia'
          onPress={() => Linking.openURL(speakerData.url).catch(err => ('There was an error', err))}        
        />        
      </View>
    </ScrollView>  
  )  
}

Speaker.PropTypes = {
  speakerData: PropTypes.objectOf(PropTypes.string)
}

export default Speaker;