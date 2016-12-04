import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ImageHeader from 'react-native-image-header';
import Core from '../../styles/core';
import Colors from '../../styles/colors';
import FormListItem from './FormListItem';

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
        <FormListBody formItems={formItems} onFormItemPress={onFormItemPress} />
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

const FormListBody = ({ formItems, onFormItemPress }) => {
  if (formItems.length > 0) {
    return (
      <View style={{flex: 1}}>
        {formItems.map((item, i) => (
          <FormListItem
            key={i}
            onPress={() => onFormItemPress(item.id)}
            title={item.title}
            description={item.description}
            created={item.created}
            image={item.images[0].source}
          />
        ))}
      </View>
    )
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 40 }}>
        <Text style={{ color: Colors.colorPrimary, fontSize: 24, textAlign: 'center' }}>
          Start by clicking 'Create' and fill out the form!
        </Text>
      </View>
    )
  }
};

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
  }
});

FormList.propTypes = {
  backgroundImage: React.PropTypes.number,
  onCreatePress: React.PropTypes.func,
  onFormItemPress: React.PropTypes.func,
  formItems: React.PropTypes.array
};

FormList.defaultProps = {
  backgroundImage: require('./img/defaultBackground.png')
};

export default FormList;
