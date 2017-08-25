import { createRouter } from '@expo/ex-navigation';
import About from '../scenes/About';
import Speaker from '../scenes/Speaker';
import Favs from '../scenes/Favs';
import Sessions from '../scenes/Sessions';
import Schedule from '../scenes/Schedule';
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  favs: () => Favs,
  speaker: () => Speaker,
  sessions: () => Sessions,
  about: () => About,
  schedule: () => Schedule,
  navigation: () => NavigationLayout
}));

export default Router;