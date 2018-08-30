//SecondTabScreen

import React from 'react';
import {TabNavigator} from 'react-navigation';

import Location from '../../tabScreens/Location'
import Vechicle from '../../tabScreens/Vechicle'

export const SecondTab =  TabNavigator({
    Location:{
        screen: Location,
    },
    Vechicle:{
        screen: Vechicle,
    }
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#ff0000',
            activeBackgroundColor: 'orange',
            inactiveTintColor: '#000',
            showLabel: true,
            showIcon: false,
            labelStyle: {
                fontSize: 12,
                padding: 10
            },
            style: {
                backgroundColor: '#ffffff',
                borderBottomWidth: 3,
                borderBottomColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center'
            },
            indicatorStyle: {
                backgroundColor: 'yellow',
                borderBottomWidth: 3,
                borderBottomColor: 'yellow'
            },
            tabBarSelectedItemStyle: {
                borderBottomWidth: 6,
                borderBottomColor: 'blue',
            },
            
        }
    }
)