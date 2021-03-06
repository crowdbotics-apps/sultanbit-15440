import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth25723Navigator from '../features/EmailAuth25723/navigator';
import Camera25722Navigator from '../features/Camera25722/navigator';
import CalendarView25721Navigator from '../features/CalendarView25721/navigator';
import Maps25720Navigator from '../features/Maps25720/navigator';
import Tutorial25719Navigator from '../features/Tutorial25719/navigator';
import Messaging25718Navigator from '../features/Messaging25718/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth25723: { screen: EmailAuth25723Navigator },
Camera25722: { screen: Camera25722Navigator },
CalendarView25721: { screen: CalendarView25721Navigator },
Maps25720: { screen: Maps25720Navigator },
Tutorial25719: { screen: Tutorial25719Navigator },
Messaging25718: { screen: Messaging25718Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
