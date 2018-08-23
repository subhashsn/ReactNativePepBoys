import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';
import ListView from '../components/listView/listView.js'

export default class First extends Component {
  static navigationOptions = {
    tabBarLabel: 'AutoParts',
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../../assets/app/home.png')}
    //     style={[styles.icon]}
    //   />
    // ),
  };
  render() {
    return (
      <ListView />
    );
  }
}

