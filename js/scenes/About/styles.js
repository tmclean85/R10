import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 10,
    borderColor: '#e6e6e6'
  },
  headerImage: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerInfo: {
    paddingLeft: 30,
    paddingRight: 30

  },
  topText: {
    color: '#000',
    fontSize: 25,    
    fontFamily: typography.fontMain    
  },
  text: {
    fontWeight: 'bold',
    alignItems: 'flex-start',
    fontFamily: typography.fontMain
  },

  headerText: {
    fontSize: 16,        
    fontWeight: 'bold',
    color: '#000',
    fontFamily: typography.fontMain
  },  
  conductTitle: {
    color: '#9963ea',
    fontSize: 18
  },
  conductBody: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: typography.fontMain
  },
  list: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10
  },
  box: {
    paddingTop: 10,
    paddingBottom: 10
  }
});