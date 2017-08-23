import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SectionList,
  FlatList
} from 'react-native';

import { styles } from './styles';

const Schedule = ({ data }) => (

    <View>
      <FlatList
        data={data}
        renderItem={({item}) => 
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>            
          </View>  
        }
      />
    </View>
  
);

export default Schedule;
