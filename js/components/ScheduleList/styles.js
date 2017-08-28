import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  scheduleWrapper: {
    flex: 1,
    margin: 10,
    borderBottomWidth: 1.5,
    borderColor: '#E6E6E6'    
  },
  scheduleHeaderBar: {
    backgroundColor: colors.lightGray       
  },
  scheduleHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'flex-start',
    margin: 5,
    fontFamily: typography.fontMain,
    color: 'black'
  },

  scheduleSubHeader: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    margin: 5
  },

  scheduleTime: {
    fontFamily: typography.fontMain,
    color: 'black',
    backgroundColor: colors.lightGrey,
    padding: 10,
    paddingLeft: 15
  },

  scheduleIcon: {
    position: 'absolute',
    right: 10,
    bottom: 4,
    color: colors.red
  }
});