import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import ImageHeader from 'react-native-image-header';
import Core from '../../styles/core';
import Colors from '../../styles/colors';
import Touchable from '../Touchable';

const FormList = ({ backgroundImage, onCreatePress, formItems, onFormItemPress }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageHeader
        statusBarTheme="light-content"
        backgroundImage={backgroundImage}
        maxHeight={120}
        minHeight={90}
        titleScale={0.9}
        titleTranslateY={0}
        headerChildren={<HeaderChildren onCreatePress={onCreatePress} />}
      >
        <View style={{ flex: 1 }}>
          {formItems.map((item, i) => (
            <Touchable key={i} onPress={() => onFormItemPress(item.id)}>
              <View style={styles.listItem}>
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                <Text style={[ Core.miniText, { color: Colors.colorDescriptionText } ]}>{item.description}</Text>
              </View>
            </Touchable>
          ))}
        </View>
      </ImageHeader>
    </View>
  )
};

const CIRCLE_LOGO = require('./img/crochet.png');
const HeaderChildren = ({ onCreatePress }) => (
  <View style={styles.header}>
    <View style={styles.headerSection} />
    <View style={styles.headerSection}>
      <View style={styles.headerCircle}>
        <Image
          source={CIRCLE_LOGO}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </View>
    </View>
    <TouchableOpacity style={styles.headerSection} onPress={onCreatePress}>
      <Text style={styles.createButton}>Create></Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 120
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Core.shadow
  },
  createButton: {
    color: '#FFF',
    fontSize: 20
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    backgroundColor: Colors.colorSecondary
  },
  listItem: {
    padding: 15,
    width: null,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  }
});

FormList.propTypes = {
  backgroundImage: React.PropTypes.number,
  onCreatePress: React.PropTypes.func,
  formItems: React.PropTypes.array
};

FormList.defaultProps = {
  backgroundImage: require('./img/defaultBackground.png')
};

export default FormList;
