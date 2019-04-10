import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: { padding: 20 },
});

const SimpleRow = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={()=> alert("Future Development")}>
    <Text>{props.location.city + ' ' }{props.location.street}</Text>
    <Text>{props.location.street}</Text>
  </TouchableOpacity>
);

SimpleRow.propTypes = {
  name: PropTypes.string,
  Contact: PropTypes.string,
};

export default SimpleRow;