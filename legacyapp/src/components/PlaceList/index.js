import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from '../LIstItem';

export default function PlaceList({ places, onItemDeleted }) {
  return (
    <FlatList 
      style={styles.listContainer}
      data={places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.value}
          placeImage={info.item.image}
          // onItemPressed={() => alert('Item Pressed - ID: ' + i)}
          onItemPressed={() => onItemDeleted(info.item.key)}
        />
      )}   
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
  onItemDeleted : PropTypes.func
}

PlaceList.defaultProps = {}
