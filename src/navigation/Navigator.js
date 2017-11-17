import { DrawerNavigator } from 'react-navigation';

import Home from '../modules/home/containers/Home';
import History from '../modules/history/views/History';

const Navigator = DrawerNavigator({
  Home: { screen: Home },
  History: { screen: History }
});

export default Navigator;
