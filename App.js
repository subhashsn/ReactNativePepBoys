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
      // <Tab />
      <MyDrawerNavigator />
      
    );
  }
}*/

//https://reactnativecode.com/drawer-navigator-android-ios-example/

import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { Tab } from './src/components/TabBar/TabScreen.js'

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

class MainActivity extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);
  }
   render()
   {
      return(
        <View style={{flex: 1}}>
       <View>
            <Image
              source = {require('./src/image/pepBoysHeader.jpeg')}
              style={{ width: 380, height: 115, marginLeft: 5}}
            />
        </View>
        <Tab />
        </View>
      );
   }
}
 
class SecondActivity extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);
  }
   
     render()
     {
        return(
           <View style = { styles.MainContainer }>
              <Text style={{fontSize: 23}}> This is Activity - 2 </Text>
           </View>
        );
     }
  }
 
  class ThirdActivity extends Component {
    constructor(props) {
      super(props);
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);
    }
       render()
       {
          return(
     
             <View style = { styles.MainContainer }>
     
                <Text style={{fontSize: 23}}> This is Activity - 3 </Text>
              
             </View>
          );
       }
    }
 
    const FirstActivity_StackNavigator = StackNavigator({
      First: { 
        screen: MainActivity, 
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
        screen: SecondActivity, 
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
        screen: ThirdActivity, 
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
    
export default MyDrawerNavigator = DrawerNavigator({
  MainStack: { 
    screen: FirstActivity_StackNavigator
  },
 
  SecondStack: { 
    screen: SecondActivity_StackNavigator
  },
 
  ThirdStack: { 
    screen: ThirdActivity_StackNavigator
  }
});
 
    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
    
  },
  RectangleShapeView: {
    width: 120 * 4,
    height: 120,
    backgroundColor: '#FF0000'
}
 
});
