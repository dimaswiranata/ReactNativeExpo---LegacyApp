import React from 'react';
import { Provider } from 'react-redux';

import NavigationUtils from './utils/navigation.utils';
import Router from './routes';
import configureCore from './core';

const core = configureCore();

const AppContainer = () => {
  return (
    <>
      <Provider store={ core }>
        <Router 
          ref={navigatorRef => {
            NavigationUtils.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    </>
  );
}

export default AppContainer;