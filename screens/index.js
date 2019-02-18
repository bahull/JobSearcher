import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import AuthScreen from "./AuthScreen";
import WelcomeScreen from "./WelcomeScreen";
import MapScreen from "./MapScreen";
import DeckScreen from "./DeckScreen";
import SettingsScreen from "./SettingsSreen";
import ReviewScreen from "./ReviewScreen";

const StackNav = createStackNavigator({
  review: ReviewScreen,
  settings: SettingsScreen
});

const MainTabNav = createBottomTabNavigator({
  map: MapScreen,
  deck: DeckScreen,
  review: StackNav
});

const TabNav = createBottomTabNavigator(
  {
    Welcome: WelcomeScreen,
    Auth: AuthScreen,
    main: MainTabNav
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      //   tabBarVisible: false
    })
  }
);

export default createAppContainer(TabNav);
