import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  sectionHeader: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
    fontFamily: typography.fontMain,
    backgroundColor: colors.lightGray, 
  },
  sectionContent: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  sectionFooter: {
    paddingLeft: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderColor: '#E6E6E6'
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: typography.fontMain
  },
  locationText: {
    fontSize: 16,
    fontFamily: typography.fontMainLight,
    color: colors.mediumGray,
    fontWeight: 'bold'
  }
})