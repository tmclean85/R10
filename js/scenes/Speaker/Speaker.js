import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button
} from 'react-native';
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
          title='Read More on Wikipedia'
          onPress={() => console.log('hey')}        
        />        
      </View>
    </ScrollView>  
  )  
}

export default Speaker;