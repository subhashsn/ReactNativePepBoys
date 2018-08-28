/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNav } from './src/components/Drawer/DrawerNav';
import Routes from './src/components/routes/Routes.js'

export default class App extends Component {
  render() {
    return (
      <Routes />
      // <DrawerNav />
    );
  }
}

