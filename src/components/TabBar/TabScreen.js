import React from 'react';
import {TabNavigator} from 'react-navigation';

import First from '../../tabScreens/AutoParts'
import Second from '../../tabScreens/TopBrands'

export const Tab =  TabNavigator({
    First:{
        screen: First,
    },
    Second:{
        screen: Second,
    }
},
{
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#f2f2f2',
        activeBackgroundColor: '#2EC4B6',
        inactiveTintColor: '#666',
        labelStyle: {
            fontSize: 12,
            padding: 5
        }
    }
}
)



