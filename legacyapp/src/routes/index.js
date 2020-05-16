import React, { Component } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';

import Storybook from '../../storybook';
import SharePlace from '../pages/SharePlace';
import FindPlace from '../pages/FindPlace';
import SideDrawer from '../pages/SideDrawer';
import Auth from '../pages/Auth';
import DetailPlace from '../pages/PlaceDetail';
import Icon from '../components/Icon';
import { navigationRef } from '../utils/navigation.utils';
import { DrawerContent } from '../pages/DrawerContent';

const Tab = createBottomTabNavigator();
const FindStack = createStackNavigator();
const ShareStack = createStackNavigator();
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabRouter() {
  return (
    <Tab.Navigator
      initialRouteName="Find"
    >
      <Tab.Screen
        name="Find"
        component={FindStackRouter}
        options={{
          tabBarLabel: 'Find',
          tabBarIcon: ({ color, size }) => (
            <Icon 
              name={Platform.OS === 'android' ? 'md-share-alt' : 'ios-share-alt'} 
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
          tabBarIcon: ({ color, size }) => (
            <Icon 
            name={Platform.OS === 'android' ? 'md-map' : 'ios-map'}  
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
      drawerContent={props => <DrawerContent {...props}/>}
    >
      <Drawer.Screen
        name="FindDrawer"
        component={TabRouter}
      />
      {/* <Drawer.Screen
        name="gotoAuth"
        component={MainNavigator}
        options={{ 
          gestureEnabled: false
        }}
      /> */}
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
      {/* <MainStack.Screen
        name="Storybook"
        component={Storybook}
      /> */}
      {/* <MainStack.Screen
        name="InApp"
        component={DrawerRouter}
      /> */}
    </MainStack.Navigator>
  );
}

class Router extends Component {
  render(){
    return (
      <NavigationContainer ref={navigationRef}>
        {this.props.auth ? (
            <MainNavigator/>
          ) : (
            <DrawerRouter/>
          )
        }
      </NavigationContainer>
    );
  }
};

const mapStateToProps = state => {
  return{
    auth: state.auth.auth
  };
};

export default connect(mapStateToProps, null)(Router);
