import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItem({ placeName, onItemPressed }) {
  return (
    <TouchableOpacity onPress={onItemPressed}>
      <View style={styles.listItem}>
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
})

ListItem.propTypes = {  
  placeName: PropTypes.string,
  onItemPressed : PropTypes.func
}

ListItem.defaultProps = {
  placeName: 'Munich'
}
