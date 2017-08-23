import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImage: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerInfo: {
    height: 50
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'flex-start',
    margin: 10,
    fontFamily: typography.fontMain
  },

  headerText: {
    fontWeight: 'bold',
    color: '#9963ea',
    fontFamily: typography.fontMain
  },  
  list: {
    marginTop: 100,
  },
});