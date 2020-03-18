import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import ListItem from '../LIstItem';

export default function PlaceList({ places }) {
  const placesOutput = places.map((places, i) => (
    <ListItem 
      key={i}
      placeName={places}
    />
  ));
  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})

PlaceList.propTypes = { 
  places : PropTypes.array
}

PlaceList.defaultProps = {}
