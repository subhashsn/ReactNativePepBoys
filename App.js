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

// import ModalExample from './src/components/OtherComponents/ModalExample';
// import ActivityIndicatorExample from './src/components/OtherComponents/ActivityIndicatorExample';
// import PickerExample from './src/components/OtherComponents/PickerExample';
// import SwitchHome from './src/components/OtherComponents/Switch/SwitchHome';
// import AlertExample from './src/components/OtherComponents/AlertExample';
// import Geolocation from './src/components/OtherComponents/Geolocation';
// import AsyncStorageExample from './src/components/OtherComponents/AsyncStorageExample';

export default class App extends Component {
  render() {
    return (
      <Routes />
      // <DrawerNav />

      //Testing Components
      //===================

      // <ModalExample />
      // <ActivityIndicatorExample />
      // <PickerExample/>
      // <SwitchHome />
      // <AlertExample />
      // <Geolocation />
      // <AsyncStorageExample />

    );
  }
}

