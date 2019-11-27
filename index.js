/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import RouterComponent from './videoSrc/components/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RouterComponent);
