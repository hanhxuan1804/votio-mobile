/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './app/App';
import {name as appName} from './app.json';
import {store} from './store';
import {Provider as StoreProvider} from 'react-redux';
const {I18nManager} = require('react-native');
I18nManager.allowRTL(false);

const AppRegistryWrapper = () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
AppRegistry.registerComponent(appName, () => AppRegistryWrapper);
