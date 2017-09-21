import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import TeaGuide from '../screens/TeaGuide';
import CoffeeGuide from '../screens/CoffeeGuide';


export default TabNavigator(
  {
    Tea: {
      screen: TeaGuide,
    },
    Home: {
      screen: HomeScreen,
    },
    Coffee: {
      screen: CoffeeGuide,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Tea':
            iconName = Platform.OS === 'ios'
              ? `ios-options${focused ? '' : '-outline'}`
              : 'md-options';
            break;
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
            break;
          case 'Coffee':
            iconName = Platform.OS === 'ios'
            ? `icon ion-coffee${focused ? '' : '-outline'}`
            : 'icon ion-coffee';    
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    initialRouteName: 'Home',
    tabBarOptions: {
    activeBackgroundColor: '#5F6062',
    inactiveBackgroundColor: '#5F6062',
    showLabel: false,
    
  },
  }
);
