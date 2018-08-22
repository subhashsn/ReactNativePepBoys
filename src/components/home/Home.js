import React,{Component} from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListView from '../listView/listView.js'
import { Tab } from '../TabBar/TabScreen.js'



export default class Home extends Component {
     
    render() {
      return (
       <View style={{flex: 1}}>
       <View>
            <View style={styles.RectangleShapeView} />
        </View>
        <Tab />
        </View>
      );
    }
  }

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    RectangleShapeView: {
        width: 120 * 4,
        height: 120,
        backgroundColor: '#FFFF00'
    }
  });