import React from 'react';
// import { Provider } from 'react-redux';

import NavigationUtils from './utils/navigation.utils';
import Router from './routes';
// import initStore from './redux/store';

// const store = initStore();

const AppContainer = () => {
  return (
    <>
      {/* <Provider store={ store }> */}
        <Router 
          ref={navigatorRef => {
            NavigationUtils.setTopLevelNavigator(navigatorRef);
          }}
        />
      {/* </Provider> */}
    </>
  );
}

export default AppContainer;