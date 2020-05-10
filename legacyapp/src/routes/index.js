import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Storybook from '../../storybook';
import SharePlace from '../pages/SharePlace';
import FindPlace from '../pages/FindPlace';
import Auth from '../pages/Auth';
import DetailPlace from '../pages/PlaceDetail';
import Icon from '../components/Icon';
import { navigationRef } from '../utils/navigation.utils';

const Tab = createBottomTabNavigator();

function TabRouter() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#757575',
        style: {
          height: 58,
          paddingVertical: 8,
          paddingBottom: 8,
          backgroundColor: '#fff',
          elevation: 10,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0
        },
        tabStyle: {
          elevation: 0
        },
      }}
    >
      <Tab.Screen
        name="Find"
        component={FindPlace}
        options={{
          tabBarIcon: ({color, size}) => 
            <Icon 
              name='ios-share-alt' 
              type='Ionicons'
              color={color} 
              size={size}
            />
        }}
      />
      <Tab.Screen
        name="Share"
        component={SharePlace}
        options={{
          tabBarIcon: ({color, size}) => 
            <Icon 
              name='md-map' 
              type='Ionicons'
              color={color} 
              size={size}
            />
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <Stack.Screen
        name="Storybook"
        component={Storybook}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPlace}
      />
      <Stack.Screen
        name="InApp"
        component={TabRouter}
      />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRouter />
    </NavigationContainer>
  );
};
