import React from 'react';
import {TabNavigator} from 'react-navigation';

import First from './First'
import Second from './Second'
import Third from './Third'

export const Tab =  TabNavigator({
    First:{
        screen: First,
    },
    Second:{
        screen: Second,
    },
    Third:{
        screen: Third,
    },
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



