import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Colors from '../../styles/colors';
import Core from '../../styles/core';
import Touchable from '../Touchable';

const FormListItem = ({ onPress, title, description }) => {
  return (
    <Touchable onPress={onPress}>
      <View style={styles.listItem}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text style={[ Core.miniText, { color: Colors.colorDescriptionText } ]}>{description}</Text>
      </View>
    </Touchable>
  )
};

FormListItem.propTypes = {
  onPress: React.PropTypes.func,
  title: React.PropTypes.string,
  description: React.PropTypes.string
};

export default FormListItem;
