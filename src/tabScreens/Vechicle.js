import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import MenuList from '../components/AlbumList/MenuList.js'

export default class Vechicle extends Component {
  static navigationOptions = {
    tabBarLabel: 'Vechicle'
  };

  state = {
    locations: [
      {'header': 'PopBoys IndianBoys', 'id': 1, 'img':require('../../assets/app/bmw_car.jpg'),'address': '4500 Lafayette Rd Indianapolis, IN46254','slot':'9:30 PM - 10:30 PM','review':'105 Reviews','status':'Closed Now'},
      {'header': 'PopBoys1 IndianBoys', 'id': 2, 'img':require('../../assets/app/bmw_car.jpg'),'address': '4500 Lafayette Rd Indianapolis, IN46254','slot':'7:30 AM - 8:30 AM','review':'105 Reviews','status':'Open Now'}
    ]
  }

  renderLocation(){
        
    return this.state.locations.map(locations => 
        <MenuList key={locations.id} locations={locations}></MenuList>
    )
  }

  render() {
    return (
      <ScrollView>
          {this.renderLocation()}
      </ScrollView>
    );
  }
}

