import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps129048Navigator from '../features/Maps129048/navigator';
import Add-Item129047Navigator from '../features/Add-Item129047/navigator';
import Maps129043Navigator from '../features/Maps129043/navigator';
import UserProfile129039Navigator from '../features/UserProfile129039/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps129048: { screen: Maps129048Navigator },
Add-Item129047: { screen: Add-Item129047Navigator },
Maps129043: { screen: Maps129043Navigator },
UserProfile129039: { screen: UserProfile129039Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
