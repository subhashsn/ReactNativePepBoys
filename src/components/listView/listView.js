import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View ,ScrollView,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ListView = () => {
   
   state = {
    names: [
       {'name': 'Ben', 'id': 1, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Susan', 'id': 2, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Robert', 'id': 3, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Mary', 'id': 4, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Daniel', 'id': 5, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Laura', 'id': 6, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'John', 'id': 7, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Debra', 'id': 8, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Aron', 'id': 9, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Ann', 'id': 10, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Steve', 'id': 11, 'img':'../../../assets/app/pepboys1.png'},
       {'name': 'Olivia', 'id': 12, 'img':'../../../assets/app/pepboys1.png'}
    ]
 }

   return (
            <ScrollView>
                <View style={[style.parent]}>
                {  
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {[style.item,style.child]}>
                        <Image source = {require('../../../assets/app/pepboys1.png')} style={{ width: 125, height: 125, marginLeft: 5}}/>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
               </View>
            </ScrollView>
   )
}

//<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />

//<Image source = {require('../../../assets/app/pepboys1.png')} style={{ width: 125, height: 125, marginLeft: 5}}/>
export default ListView

const style = StyleSheet.create({
    
    parent: {
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    child: {
        width: '48%', 
        margin: '1%', 
        aspectRatio: 1
        
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
        margin: 2,
        borderColor: '#ffffff',
        borderWidth: 1,
        backgroundColor: '#ffffff'
     }
  
  });