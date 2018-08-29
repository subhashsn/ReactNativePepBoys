//https://medium.com/building-with-react-native/what-is-asyncstorage-in-react-native-and-how-you-to-use-it-with-app-state-manager-1x09-b8c636ce5f6e

//https://gist.github.com/pradeep1991singh/60f8ee10975307f908f4912cf6996e97
import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button,TouchableOpacity } from 'react-native'

class AsyncStorageExample extends Component {
    
    constructor(props) 
    {
        super(props);
        this.state = {
            myKey: null
        }
    }

    // One method of storing the data
    /*
    userId = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';
    
    saveUserId = async userId => {
        try {
            await AsyncStorage.setItem('userId', userId);
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    };

    getUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId') || 'none';
            this.setState({myKey: userId});
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        return userId;
    }

    deleteUserId = async () => {
        try {
            await AsyncStorage.removeItem('userId');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }
    */

    async saveKey(value){
        try{    
            console.log("saveKey");
            await AsyncStorage.setItem('userKey',value);
        } catch(error){
            console.log("Error saving data", error);
        }
    }

    async getKey(){
        try{
            console.log("getKey");
            const value = await AsyncStorage.getItem('userKey');
            console.log("value in getkey",value);
            this.setState({myKey:value})
        } catch(error){
            console.log("Error retrieving data", error);
        }
    }

    async resetKey(){
        try{
            console.log("resetKey");
            await AsyncStorage.removeItem('userKey');
            const value = await AsyncStorage.getItem('userKey');
            this.setState({myKey:value})
        } catch(error){
            console.log("Error resetting data", error);
        }
    }

    render() {
      return (
            <View style={styles.container}>
            <Text style={styles.welcome}>
            Welcome to Demo AsyncStorage!
            </Text>

            <TextInput
            style={styles.formInput}
            placeholder="Enter key you want to save!"
            value={this.state.myKey}
            onChangeText={(value) => this.saveKey(value)}
            />

            {/* <TouchableOpacity onPress={this.getKey.bind(this)}>
                <Text style = {styles.formButton}>
                    Get Key
                </Text>
            </TouchableOpacity> */}

            <Button
            style={styles.formButton}
            onPress={this.getKey.bind(this)}
            title="Get Key"
            color="#2196f3"
            accessibilityLabel="Get Key"
            />

            <Button
            style={styles.formButton}
            onPress={this.resetKey.bind(this)}
            title="Reset"
            color="#f44336"
            accessibilityLabel="Reset"
            />

            <Text style={styles.instructions}>
            Stored key is = {this.state.myKey}
            </Text>

        </View>
      )
   }
}
export default AsyncStorageExample

const styles = StyleSheet.create ({
    container: {
        padding: 30,
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      formInput: {
        paddingLeft: 5,
        height: 50,
        borderWidth: 1,
        borderColor: "#555555",
      },
      formButton: {
        borderWidth: 1,
        borderColor: "#555555",
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
      },
})