import { StackActions, NavigationAction } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationAction.navigate({
      routeName,
      params,
    })
  );
}

function popAction() {
  _navigator.dispatch(
    StackActions.pop({
      n: 1
    })
  )
}

function resetAction( paramsInput ) {
  const navigateAction = NavigationAction.navigate({
    routeName: 'home',
    params: {paramsInput},
    action: NavigationAction.navigate({ routeName: 'home', params: paramsInput })
  })

  return (
    StackActions.reset({
      index: 0,
      actions: [
        NavigationAction.navigate(
          navigateAction
        )
      ]
    })
  )
} 

function logOutAction() {
  StackActions.reset({
    index: 0,
    actions: [NavigationAction.navigate({routeName: 'login'})]
  })
}

export default {
  setTopLevelNavigator,
  navigate,
  popAction,
  resetAction,
  logOutAction
}