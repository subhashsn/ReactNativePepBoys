import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

 const AutoPartsDetails=(item)=> {
     console.log("props ::",item);
    return(
        <View>
            <Text>{item.name1}</Text>
            <Image source = {item.img} style={{ width: 125, height: 125, marginLeft: 5}}/>
        </View>
    )    
}

export default AutoPartsDetails