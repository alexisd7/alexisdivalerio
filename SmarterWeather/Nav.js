import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: WeatherProject},
  Settings: {screen: SettingsScreen},
});

const Nav = createAppContainer(MainNavigator);

export default createAppContainer(Nav);