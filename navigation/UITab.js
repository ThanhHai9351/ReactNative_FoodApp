import * as React from 'react';
import {ProductGrid, FoodList, Setting, Dashboard, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons, icons} from '../constants';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
function UITab(props) {
  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: '#999999',
    tabBarIcon: ({focused, color, size}) => {
      let screenName = route.name;
      if (screenName === 'Dashboard') {
        return focused ? (
          <Image source={icons.homeActiveIcon} />
        ) : (
          <Image source={icons.homeIcon} />
        );
      }
      if (screenName === 'ProductGrid') {
        return focused ? (
          <Image source={icons.boxActiveIcon} />
        ) : (
          <Image source={icons.boxIcon} />
        );
      }
      if (screenName === 'FoodList') {
        return focused ? (
          <Image source={icons.eatActiveIcon} />
        ) : (
          <Image source={icons.eatIcon} />
        );
      }
      if (screenName === 'Setting') {
        return focused ? (
          <Image source={icons.settingActiveIcon} />
        ) : (
          <Image source={icons.settingIcon} />
        );
      }
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={'Dashboard'} component={Dashboard} />
      <Tab.Screen name={'ProductGrid'} component={ProductGrid} />
      <Tab.Screen name={'FoodList'} component={FoodList} />
      <Tab.Screen name={'Profile'} component={Profile} />
      <Tab.Screen name={'Setting'} component={Setting} />
    </Tab.Navigator>
  );
}

export default UITab;
