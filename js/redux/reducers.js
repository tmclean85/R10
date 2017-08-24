import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import { ConductRenderer } from './modules/conduct';
import { ScheduleRenderer } from './modules/schedule';
import { SessionRenderer } from './modules/sessions';


export default combineReducers({
  schedule: ScheduleRenderer,
  navigation: NavigationReducer,
  conduct: ConductRenderer,
  session: SessionRenderer
});