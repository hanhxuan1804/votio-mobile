/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

const {I18nManager} = require('react-native');
I18nManager.allowRTL(false);

AppRegistry.registerComponent(appName, () => App);
