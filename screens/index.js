import { Navigation } from 'react-native-navigation';

//TabNavigator Screen
import Home from './Home';
//import Hero from './Hero';
import Hero from '../containers/heroes';
import Settings from './Settings';

//Push Screen
import HeroAdd from './HeroAdd';
import HeroView from './HeroView';
import HeroEdit from './HeroEdit';
// register all screens of the app (including internal ones)
export function registerScreens(store,Provider) {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Hero', () => Hero,store,Provider);
  Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd,store,Provider);
  Navigation.registerComponent('push.HeroView', () => HeroView,store,Provider);
  Navigation.registerComponent('push.HeroEdit', () => HeroEdit,store,Provider)
}