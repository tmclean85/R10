import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width / 1.45,
    height: 55,
    margin: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  buttonText: {
    color: 'black',
    fontFamily: typography.fontMain,
    fontSize: 18,
    backgroundColor: 'transparent'
  }
})