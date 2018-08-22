/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


 /*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './src/components/routes/Routes.js'
import { Tab } from './src/components/TabBar/TabScreen.js'
import { MyDrawerNavigator } from './src/components/Drawer/Drawer.js'


export default class App extends Component {
  render() {
    return (
      // <Routes />
      <Tab />
      // <MyDrawerNavigator />
      
    );
  }
}
*/

import React, { Component } from 'react';
import { DrawerNav } from './src/components/Drawer/DrawerNav';

export default class App extends Component {
  render() {
    return (
      <DrawerNav />
    );
  }
}

