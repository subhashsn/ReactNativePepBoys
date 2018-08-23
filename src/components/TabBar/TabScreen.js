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
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#ff0000',
        activeBackgroundColor: '#ffffff',
        inactiveTintColor: '#000',
        showLabel: true,
		showIcon: true,
        labelStyle: {
            fontSize: 12,
            padding: 5
        }
    }
}
)



