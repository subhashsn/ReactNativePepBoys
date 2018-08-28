import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View ,ScrollView,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ListView = () => {
   
   state = {
        names: [
        {'name1': 'Ben11', 'id': 1, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Ben11'},
        {'name1': 'Susan', 'id': 2, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Susan'},
        {'name1': 'Robert', 'id': 3, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Robert'},
        {'name1': 'Mary', 'id': 4, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Mary'},
        {'name1': 'Daniel', 'id': 5, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Daniel'},
        {'name1': 'Laura', 'id': 6, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Laura'},
        {'name1': 'John', 'id': 7, 'img':require('../../../assets/app/pepboys1.png'),'details': 'John'},
        {'name1': 'Debra', 'id': 8, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Debra'},
        {'name1': 'Aron', 'id': 9, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Aron'},
        {'name1': 'Ann', 'id': 10, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Ann'},
        {'name1': 'Steve', 'id': 11, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Steve'},
        {'name1': 'Olivia', 'id': 12, 'img':require('../../../assets/app/pepboys1.png'),'details': 'Olivia'}
        ]
    }

    gotoDetailPage=(item)=>{
        console.log("name in goToDetails Page ..",item);

        Actions.AutoPartsDetails(item)
    }

   return (
            <ScrollView>
                <View style={[style.parent]}>
                {  
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {[style.item,style.child]}>
                        <TouchableOpacity onPress = {() => this.gotoDetailPage(item)}>
                            <Image source = {require('../../../assets/app/pepboys1.png')} style={{ width: 125, height: 125, marginLeft: 5}}/>
                            <Text>{item.name1}</Text>
                        </TouchableOpacity>
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