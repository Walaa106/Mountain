import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Home from './container/HomeContainer';
import Login from './container/LoginContainer';
import Sidebar from './container/SidebarContainer';

export const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />,
  }
);

const App = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: Home },
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
  }
);

export default () => (
  <Root>
    <App />
  </Root>
);
