import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Colors from '../../styles/colors';
import Core from '../../styles/core';
import Touchable from '../Touchable';
import moment from 'moment';

const SPACING = 5;

const FormListItem = ({ onPress, title, description, created, image }) => {
  return (
    <Touchable onPress={onPress}>
      <View style={styles.listItem}>
        <View style={{ width: 70 }}>
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View style={{ flex: 2.5 }}>
          <Text style={{ fontSize: 20, marginBottom: SPACING }} numberOfLines={1} ellipsizeMode="middle">{title}</Text>
          <View style={styles.dateContainer}>
            <Text style={{ alignSelf: 'center', color: 'white', fontWeight: '500' }}>
              {moment(created).format('ll')}
            </Text>
          </View>
          <Text style={[ Core.miniText, { color: Colors.colorDescriptionText } ]} numberOfLines={3}>{description}</Text>
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
    borderBottomColor: Colors.colorSecondary,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    flexDirection: 'row'
  },
  dateContainer: {
    justifyContent: 'center',
    width: 110,
    height: 30,
    borderRadius: 4,
    backgroundColor: Colors.colorPrimary,
    marginBottom: SPACING,
    borderWidth: 2,
    borderColor: Colors.colorSecondary
  }
});

FormListItem.propTypes = {
  onPress: React.PropTypes.func,
  title: React.PropTypes.string,
  description: React.PropTypes.string
};

export default FormListItem;
