import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'

export default class drawerContentComponents extends Component {

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
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../../../assets/drawer-cover.png')} style={{flex: 1, width: 280, justifyContent: 'center',alignItems: 'center'}} >
                <Image source = {require('../../../assets/app/pepboys1.png')} style={styles.CircleShapeImageView}/>
                    <Text style={styles.headerText}>Steve John</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    <Image source = {require('../../../assets/app/home.png')} style={{ width: 25, height: 25, marginLeft: 5}}/>
                    <Text onPress={this.navigateToScreen('ScreenA')} style={styles.screenTextContainer}>Home</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Image source = {require('../../../assets/app/home.png')} style={{ width: 25, height: 25, marginLeft: 5}}/>
                    <Text onPress={this.navigateToScreen('ScreenB')} style={styles.screenTextContainer}>Screen B</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Image source = {require('../../../assets/app/home.png')} style={{ width: 25, height: 25, marginLeft: 5}}/>
                    <Text onPress={this.navigateToScreen('ScreenC')} style={styles.screenTextContainer}>Screen C</Text>
                </View>
            </View>
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200
    },
    headerContainer: {
        height: 200,
        width: 200
    },
    headerText: {
        color: '#fff8f8',
        paddingTop:15
    },
    screenContainer: {
        paddingTop: 20,
        width: 200
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