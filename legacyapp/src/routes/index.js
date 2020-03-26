import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Storybook from '../../storybook';
import Home from '../pages/Home'
import OnBoarding from '../pages/OnBoarding';
import Start from '../pages/Start';

const Stack = createStackNavigator();

function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <Stack.Screen
        name="Storybook"
        component={Storybook}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
      />
      <Stack.Screen
        name="Start"
        component={Start}
      />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
};
