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
  },
  container:{
    flex:1,
    marginTop:20,
    paddingHorizontal: 16,
  }
});

const SimpleRow = props => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.row}>
      <Image
       source={{uri: 'https://via.placeholder.com/200'}}
       style={styles.ImageIconStyle}
      />
      <View>
        <Text>{props.title}</Text>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

SimpleRow.propTypes = {
  name: PropTypes.string,
  Contact: PropTypes.string,
};

export default SimpleRow;
