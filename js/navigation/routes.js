import { createRouter } from '@expo/ex-navigation';
import About from '../scenes/About';
import Favs from '../scenes/Favs';
import Sessions from '../scenes/Sessions';
import Schedule from '../scenes/Schedule';
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  favs: () => Favs,
  sessions: () => Sessions,
  about: () => About,
  schedule: () => Schedule,
  navigation: () => NavigationLayout
}));

export default Router;