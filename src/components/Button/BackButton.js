import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BackButton = ({ color, size, onPress, style, text }) => {
  const styles = {
    text: {
      color: color,
      fontSize: size
    }
  };
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.text}>{`< ${text}`}</Text>
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  style: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.object]),
  size: React.PropTypes.number,
  color: React.PropTypes.string,
  text: React.PropTypes.string,
  onPress: React.PropTypes.func
};

BackButton.defaultProps = {
  color: '#FFF',
  size: 20,
  text: 'Back'
};

export default BackButton;