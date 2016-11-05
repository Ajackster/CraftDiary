import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './src/main';
import reducers from './src/redux/reducers';

const store = createStore(reducers);

export default class CrochetApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CrochetApp', () => CrochetApp);
