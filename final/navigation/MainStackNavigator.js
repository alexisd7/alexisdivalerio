import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/Detail';
import FilterDetailScreen from '../screens/FilterDetail';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
  Filter: FilterDetailScreen
}, {initialRouteName:"Home"});

export default HomeStack;