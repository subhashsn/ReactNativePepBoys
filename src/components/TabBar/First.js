import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ListView from '../listView/listView.js'

export default class First extends Component {
  render() {
    return (
      <ListView />
    );
  }
}
const styles = StyleSheet.create({
  textFirst: {
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 300,
  },
});
