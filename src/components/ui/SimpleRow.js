import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    padding: 10,
    width: '100%',
    alignContent: 'space-between'
   },
  ImageIconStyle: {
    padding: 20,
    margin: 10,
    height: 250,
    width: 300,
    resizeMode: 'stretch',
  }
});

const SimpleRow = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={()=> alert("Future Development")}>
    <Image
     source={{uri: 'https://via.placeholder.com/200'}}
     style={styles.ImageIconStyle}
    />
    <View>
      <Text>{props.title}</Text>
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

SimpleRow.propTypes = {
  name: PropTypes.string,
  Contact: PropTypes.string,
};

export default SimpleRow;
