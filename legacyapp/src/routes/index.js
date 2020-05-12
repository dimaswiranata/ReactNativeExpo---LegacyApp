import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Storybook from '../../storybook';
import SharePlace from '../pages/SharePlace';
import FindPlace from '../pages/FindPlace';
import SideDrawer from '../pages/SideDrawer';
import Auth from '../pages/Auth';
import DetailPlace from '../pages/PlaceDetail';
import Icon from '../components/Icon';
import { navigationRef } from '../utils/navigation.utils';

const Tab = createBottomTabNavigator();
const FindStack = createStackNavigator();
const ShareStack = createStackNavigator();
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabRouter() {
  return (
    <Tab.Navigator
      initialRouteName="Find"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Find"
        component={FindStackRouter}
        options={{
          tabBarLabel: 'Find',
          tabBarColor: '#009387',
          tabBarIcon: ({ color, size }) => (
            <Icon 
              name="md-share-alt" 
              type='Ionicons' 
              color={color} 
              size={size} 
            />
          )
        }}
      />
      <Tab.Screen
        name="Share"
        component={ShareStackRouter}
        options={{
          tabBarLabel: 'Share',
          tabBarColor: '#009387',
          tabBarIcon: ({ color, size }) => (
            <Icon 
              name="md-map" 
              type='Ionicons' 
              color={color} 
              size={size} 
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const FindStackRouter = () => {
  return (
    <FindStack.Navigator
      initialRouteName="Find"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerShown: false
      }}
    >
      <FindStack.Screen
        name="Find"
        component={FindPlace}
        options={{
          title: 'Find Place'
        }}
      />
      <FindStack.Screen
        name="Detail"
        component={DetailPlace}
      />
    </FindStack.Navigator>
  );
}

const ShareStackRouter = () => {
  return (
    <ShareStack.Navigator
      initialRouteName="Share"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerShown: false
      }}
    >
      <ShareStack.Screen
        name="Share"
        component={SharePlace}
      />
    </ShareStack.Navigator>
  );
}

function DrawerRouter() {
  return (
    <Drawer.Navigator 
      initialRouteName='FindDrawer'
    >
      <Drawer.Screen
        name="FindDrawer"
        component={TabRouter}
      />
      <Drawer.Screen
        name="SideDrawer"
        component={SideDrawer}
      />
    </Drawer.Navigator>
  );
}

function MainNavigator() {
  return(
    <MainStack.Navigator
      initialRouteName='Auth'
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <MainStack.Screen
        name="Auth"
        component={Auth}
      />
      <MainStack.Screen
        name="Storybook"
        component={Storybook}
      />
      <MainStack.Screen
        name="InApp"
        component={DrawerRouter}
      />
    </MainStack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator/>
    </NavigationContainer>
  );
};
