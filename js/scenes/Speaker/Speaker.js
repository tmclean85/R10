import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SectionList,
  Image
} from 'react-native';
import { styles } from './styles';

const Speaker = ({ speakerData }) => {
  return (
    <View>
      <View>
        <Image
          style={styles.speakerAvatar}
          source={{ uri: speakerData.image }}
        />
      </View>
      <View>
        <Text>{speakerData.name}</Text>
        <Text>{speakerData.bio}</Text>
      </View>  
    </View>  
  )  
}

export default Speaker;