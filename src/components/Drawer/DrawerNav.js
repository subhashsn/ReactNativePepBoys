import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Home from '../../screens/Home';
import ScreenB from '../../screens/ScreenB';
import ScreenC from '../../screens/ScreenC';
import drawerContentComponents from './drawerContentComponents';

class HamburgerIcon extends Component {
    toggleDrawer=()=>{
      console.log(this.props.navigationProps);
      this.props.navigationProps.toggleDrawer();
    }
    render() {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
            <Image
              source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
              style={{ width: 25, height: 25, marginLeft: 5}}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

const FirstActivity_StackNavigator = StackNavigator({
    First: { 
      screen: Home, 
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      })
    },
  });


  const SecondActivity_StackNavigator = StackNavigator({
    Second: { 
      screen: ScreenB, 
      navigationOptions: ({ navigation }) => ({
        title: 'About',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      })
    },
  });


  const ThirdActivity_StackNavigator = StackNavigator({
    Third: { 
      screen: ScreenC, 
      navigationOptions: ({ navigation }) => ({
        title: 'ThirdActivity',
        headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
        headerStyle: {
          backgroundColor: '#FF9800'
        },
        headerTintColor: '#fff',
      })
    },
  });
  
export const DrawerNav = DrawerNavigator (
    {
        ScreenA:{ screen: FirstActivity_StackNavigator },
        ScreenB:{ screen: SecondActivity_StackNavigator },
        ScreenC:{ screen: ThirdActivity_StackNavigator }
    },
    {
       contentComponent: drawerContentComponents
    });