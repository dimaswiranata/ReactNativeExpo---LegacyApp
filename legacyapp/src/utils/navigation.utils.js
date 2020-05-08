import React from 'react';
import { StackActions, CommonActions, NavigationAction } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function logOutAction() {
  StackActions.reset({
    index: 0,
    actions: [NavigationAction.navigate({routeName: 'login'})]
  })
}


export const navigationRef = React.createRef();

export function navigate(name, params = {}) {
  console.log('navigate', name, params);
  navigationRef.current?.navigate(name, params);
}

function popAction() {
  let pop = StackActions.pop(1)
  navigationRef.current?.dispatch(pop);
}

function replace(name, params = {}){
  navigationRef.current?.dispatch(
    StackActions.replace(name, params)
  );
}

function resetAction(name, params = {}) {
  CommonActions.reset({
    index: 1,
    routes: [
      { name: name, params },
    ]
  })
} 

export default {
  setTopLevelNavigator,
  navigate,
  popAction,
  resetAction,
  logOutAction,
  replace
}