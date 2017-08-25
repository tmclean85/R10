/*
 Global Styles
 */

import { Platform, StyleSheet } from 'react-native';

export const colors = {
  red: '#CF392A'
};

export const typography = {
  baseSize: 16,
  fontMainLight: 'Montserrat-Light',  
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-Regular',      
    }
  })
};

