import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Storybook from '../../storybook';
import Home from '../pages/Home'
import OnBoarding from '../pages/OnBoarding';

// import Icon from '../components/Icon/Icon.component';

// import {theme} from '../styles/theme.styles';

// const iconCommonProperties = {
//   size: 20,
// };

// const tabBottomNavigator = createBottomTabNavigator({
//   tab_home: {
//     screen: HomePage,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({tintColor}) => 
//         <Icon 
//           name='home' 
//           type='Feather'
//           color={tintColor} 
//           { ...iconCommonProperties } />
//     }
//   },
//   tab_toyotafeed: {
//     screen: ToyotaMyFeed,
//     navigationOptions: {
//       tabBarLabel: 'Toyota Feed',
//       tabBarIcon: ({tintColor}) => 
//         <Icon 
//           name='grid' 
//           type='Feather'
//           color={tintColor} 
//           { ...iconCommonProperties } />
//     }
//   }
// }, {
//   initialRouteName: 'tab_home',
//   shifting: false,
//   lazy: true,
//   tabBarOptions: {
//     activeTintColor: theme.COLOR.PINK,
//     inactiveTintColor: theme.COLOR.BLACKGRAY2,
//     style: {
//       borderTopWidth: 0,
//       elevation: 10,
//       paddingVertical: 5,
//       backgroundColor: '#FFF'
//     }
//   },
// })

// const stackNavigator = createStackNavigator({
//   // stack_inapp: {
//   //   screen: tabBottomNavigator,
//   //   navigationOptions: {
//   //     header: null
//   //   }
//   // },
//   stack_storybook: {
//     screen: Storybook,
//     navigationOptions: {
//       header: null,
//     }
//   },
// }, {
//   initialRouteName: 'stack_storybook',
//   headerMode: 'none',
// });

const Stack = createStackNavigator();

function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Storybook"
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
