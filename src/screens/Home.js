import React, {Component} from 'react';
import { View, Image } from 'react-native';
import { Tab } from '../components/TabBar/TabScreen.js'

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
            <Image
              source = {require('../../assets/app/pepBoysHeader.jpeg')}
              style={{ width: 380, height: 115, marginLeft: 5}}
            />
        </View>
        <Tab />
      </View>
    );
  }
}