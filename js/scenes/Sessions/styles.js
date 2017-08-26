import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';


export const styles = StyleSheet.create({
  sessionScene: {
    padding: 30
  },
  sessionHeader: {
    borderBottomWidth: 1.5,
    borderColor: '#e6e6e6'    
  },
  speakerAvatar: {
    width: 60, 
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10
  },
  sessionLocation: {
    fontSize: 16,
    fontFamily: typography.fontMainLight,
    color: colors.mediumGray,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10    
  },
  sessionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    marginTop: 10,
    marginBottom: 10      
  },
  sessionTime: {
    fontFamily: typography.fontMain,
    color: colors.red,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10    
  },
  sessionBody: {
    fontFamily: typography.fontMainLight,
    fontSize: 18,   
    marginTop: 10,
    marginBottom: 10     
  },
  sessionSpeaker: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  speakerName: {
    fontWeight: 'bold',
    fontFamily: typography.fontMain, 
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10  
  },
  buttonBox: {
    marginTop: 20
  }
})