import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View ,ScrollView,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ListView = () => {
   
   state = {
    names: [
       {'name': 'Ben', 'id': 1},
       {'name': 'Susan', 'id': 2},
       {'name': 'Robert', 'id': 3},
       {'name': 'Mary', 'id': 4},
       {'name': 'Daniel', 'id': 5},
       {'name': 'Laura', 'id': 6},
       {'name': 'John', 'id': 7},
       {'name': 'Debra', 'id': 8},
       {'name': 'Aron', 'id': 9},
       {'name': 'Ann', 'id': 10},
       {'name': 'Steve', 'id': 11},
       {'name': 'Olivia', 'id': 12}
    ]
 }

   return (
            <ScrollView>
                <View style={[style.parent]}>
                {  
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {[style.item,style.child]}>
                        <Text>{item.name}</Text>
                        <Image
                            source = {require('./pepboys1.png')}
                            style={{ width: 125, height: 125, marginLeft: 5}}
                        />
                     </View>
                  ))
               }
               </View>
            </ScrollView>
   )
}

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
        aspectRatio: 1,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
     }
  
  });