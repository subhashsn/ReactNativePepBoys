import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LaunchScreen from '../../screens/LaunchScreen.js'
import AutoPartsDetails from '../../screens/AutoPartsDetails.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "LaunchScreen" component = {LaunchScreen} title = "LaunchScreen" initial = {true}  hideNavBar={true}/>
         <Scene key = "AutoPartsDetails" component = {AutoPartsDetails} title = "AutoPartsDetails"/>
      </Scene>
   </Router>
)
export default Routes