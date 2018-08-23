import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'

export default class tabBarContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.screenContainer}>
                <View>
                    <Image source = {require('../../../assets/app/home.png')} style={{ width: 25, height: 25, marginLeft: 5}}/>
                    <Text onPress={this.navigateToScreen('First')} style={styles.screenTextContainer}>Home</Text>
                </View>
                <View>
                    <Image source = {require('../../../assets/app/home.png')} style={{ width: 25, height: 25, marginLeft: 5}}/>
                    <Text onPress={this.navigateToScreen('Second')} style={styles.screenTextContainer}>Screen B</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: 200,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    headerContainer: {
        height: 200,
        width: 200,
        flexDirection: 'column'
    },
    headerText: {
        color: '#fff8f8',
        paddingTop:15
    },
    screenContainer: {
        paddingTop: 20,
        width: 200,
        flexDirection: 'column',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20
    },
    screenTextContainer:{
        paddingLeft: 10
    },
    CircleShapeImageView: {
        width: 80,
        height: 80,
        borderRadius: 80/2,
        backgroundColor: '#00BCD4',
        paddingLeft: 40
    }

});
