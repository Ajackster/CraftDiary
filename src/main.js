import React from 'react';
import { View, Navigator } from 'react-native';
import { initDatabase, closeDatabase } from './database/SQLite';

import CreateForm from './containers/CreateFormContainer';
import HomeScreen from './containers/HomeScreenListContainer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  componentWillMount() {
    initDatabase();
  }
  componentWillUnmount() {
    closeDatabase();
  }
  _renderScene(route, navigator) {
    switch(route.id) {
      case 'home': return <HomeScreen navigator={navigator} />;
      case 'create': return <CreateForm navigator={navigator} />;
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          initialRoute={{ id: 'home' }}
          renderScene={this._renderScene}
        />
      </View>
    )
  }
}

export default Main;
