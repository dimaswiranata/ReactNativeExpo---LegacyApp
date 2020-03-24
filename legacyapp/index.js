/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './src';
import configureCore from './src/core';
import {name as appName} from './app.json';

const core = configureCore();

const RNRedux = () => (
  <Provider store={core}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
