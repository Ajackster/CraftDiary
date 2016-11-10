import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Colors from '../../styles/colors';
import Core from '../../styles/core';
import Touchable from '../Touchable';

const FormListItem = ({ onPress, title, description, created }) => {
  return (
    <Touchable onPress={onPress}>
      <View style={styles.listItem}>
        <View>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <Text style={[ Core.miniText, { color: Colors.colorDescriptionText } ]}>{description}</Text>
        </View>
        <Text>{created}</Text>
      </View>
    </Touchable>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    width: null,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    flexDirection: 'row'
  }
});

FormListItem.propTypes = {
  onPress: React.PropTypes.func,
  title: React.PropTypes.string,
  description: React.PropTypes.string
};

export default FormListItem;
