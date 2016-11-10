import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  View
} from 'react-native';

const Touchable = ({ style, onPress, children }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback style={style} onPress={onPress}>
        {children}
      </TouchableNativeFeedback>
    );
  }
  if (Platform.OS === 'ios') {
    return (
      <TouchableHighlight style={style} onPress={onPress}>
        {children}
      </TouchableHighlight>
    );
  }
};

Touchable.propTypes = {
  style: View.propTypes.style,
  onPress: React.PropTypes.func,
  children: React.PropTypes.node || React.PropTypes.nodes
};

export default Touchable;
