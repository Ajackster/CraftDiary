import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Animated,
  StatusBar
} from 'react-native';
import Core from '../../styles/core';
import Colors from '../../styles/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HEADER_MAX_HEIGHT = 120;
const ANIMATION_DURATION = 500;
const CIRCLE_LOGO = require('./img/headerCircle.png');

class FormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerHeight: new Animated.Value(HEADER_MAX_HEIGHT),
      circleOpacity: new Animated.Value(1)
    };
    this._onInputFocus = this._onInputFocus.bind(this);
    this._onInputBlur = this._onInputBlur.bind(this);
  }
  _onInputFocus() {
    Animated.timing(this.state.headerHeight, {
      toValue: 25,
      duration: ANIMATION_DURATION
    }).start();
    Animated.timing(this.state.circleOpacity, {
      toValue: 0,
      duration: ANIMATION_DURATION
    }).start();
  }
  _onInputBlur() {
    Animated.timing(this.state.headerHeight, {
      toValue: HEADER_MAX_HEIGHT,
      duration: ANIMATION_DURATION
    }).start();
    Animated.timing(this.state.circleOpacity, {
      toValue: 1,
      duration: ANIMATION_DURATION
    }).start();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.colorLightBackground }}>
        <StatusBar barStyle="light-content" />
        <Animated.View style={[ styles.header, { height: this.state.headerHeight }]}>
          <Animated.View style={[ styles.headerCircle, { opacity: this.state.circleOpacity } ]}>
            <Image
              source={CIRCLE_LOGO}
              style={{ width: 40, height: 40, marginTop: -5, marginRight: -5 }}
              resizeMode="contain"
            />
          </Animated.View>
        </Animated.View>
        <KeyboardAwareScrollView>
          <View style={styles.formScreenContainer}>
            <View style={[ Core.shadow, { marginVertical: 15 } ]}>
              <TextInput
                placeholder="Enter a title"
                style={styles.titleInput}
                onChangeText={(text) => this.props.onTitleChange(text)}
                onFocus={this._onInputFocus}
                onBlur={this._onInputBlur}
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                value={this.props.title}
              />
            </View>
            <View style={[ Core.shadow, { marginBottom: 15 } ]}>
              <TextInput
                placeholder="Enter a description"
                multiline
                style={styles.descriptionInput}
                onChangeText={(text) => this.props.onDescriptionChange(text)}
                onFocus={this._onInputFocus}
                onBlur={this._onInputBlur}
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                value={this.props.description}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formScreenContainer: {
    flex: 1,
    backgroundColor: Colors.colorLightBackground,
    paddingHorizontal: 15
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.colorPrimary
  },
  headerCircle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Core.shadow
  },
  titleInput: {
    alignSelf: 'stretch',
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    ...Core.defaultText
  },
  descriptionInput: {
    alignSelf: 'stretch',
    height: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    ...Core.defaultText
  }
});

FormScreen.propTypes = {
  onTitleChange: React.PropTypes.func,
  onDescriptionChange: React.PropTypes.func,
  title: React.PropTypes.string,
  description: React.PropTypes.string
};

export default FormScreen;
