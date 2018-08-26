import React from 'react';
import * as screenNames from '../screen_names';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Home from 'container/HomeContainer';
import Login from 'container/LoginContainer';
import Sidebar from 'container/SidebarContainer';

export const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />,
  }
);

const appNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    [screenNames.HOME]: { screen: Home },
    [screenNames.LOGIN]: { screen: Login },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
  }
);

export default appNavigator;
