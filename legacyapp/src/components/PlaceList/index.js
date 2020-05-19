import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from '../LIstItem';

export default function PlaceList({ places, onItemSelected }) {
  return (
    <FlatList 
      style={styles.listContainer}
      data={places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => onItemSelected(info.item.id)}
        />
      )}
      keyExtractor={item => item.id}   
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})

PlaceList.propTypes = { 
  places : PropTypes.array,
  // onItemDeleted : PropTypes.func
  onItemSelected : PropTypes.func
}

PlaceList.defaultProps = {}
