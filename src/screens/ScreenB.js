import React, {Component} from 'react';
import { Image, View } from 'react-native';
import { SecondTab } from '../components/TabBar/SecondTabScreen.js'

class ScreenB extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
            <Image
              source = {require('../../assets/app/pepBoysHeader.jpeg')}
              style={{ width: 380, height: 115, marginLeft: 5}}
            />
        </View>
        <SecondTab />
      </View>
    );
  }
}

export default ScreenB;