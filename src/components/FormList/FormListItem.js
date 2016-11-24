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
        <View style={{ flex: 2.5 }}>
          <Text style={{ fontSize: 20 }} numberOfLines={1} ellipsizeMode="middle">{title}</Text>
          <Text style={[ Core.miniText, { color: Colors.colorDescriptionText } ]} numberOfLines={3}>{description}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignSelf: 'flex-end', justifyContent: 'center', width: 90, height: 30, borderRadius: 4, backgroundColor: Colors.colorPrimary }}>
            <Text style={{ alignSelf: 'center', color: 'white', fontWeight: '500' }}>
              {created}
            </Text>
          </View>
        </View>
      </View>
    </Touchable>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    width: null,
    borderBottomWidth: 1,
    borderBottomColor: Colors.colorLightBackground,
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
