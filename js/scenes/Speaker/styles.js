import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';


export const styles = StyleSheet.create({
  speakerScene: {
    backgroundColor: '#000',
    padding: 20,
  },
  speakerAvatar: {
    width: 90, 
    height: 90,
    borderRadius: 45,
    marginBottom: 10
  },
  speakerWrapper: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  speakerName: {
    fontFamily: typography.fontMain,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10    
  },
  speakerBio: {
    fontFamily: typography.fontMainLight,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10    
  }
})