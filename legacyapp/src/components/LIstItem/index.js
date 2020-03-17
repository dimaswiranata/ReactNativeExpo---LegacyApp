import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ListItem({ placeName }) {
  return (
    <View style={styles.ListItem}>
      <Text>{placeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ListItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee'
  }
})

ListItem.propTypes = {  
  placeName: PropTypes.string
}

ListItem.defaultProps = {
  placeName: 'Munich'
}
