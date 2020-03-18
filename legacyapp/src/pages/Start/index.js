import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import PropTypes from 'prop-types';
import PlaceList from '../../components/PlaceList';
import PlaceInput from '../../components/PlaceInput';

const Starting = (props) => {
  const [places, setPlaces] = useState([]);

  const placeAddedHandler = (placeName) => {
    setPlaces(places => places.concat(placeName));
  };

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={placeAddedHandler}/>
      <PlaceList places={places}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  }
})

Starting.propTypes = {
  text: PropTypes.string
}

Starting.defaultProps = {
  text: 'example prop'
}

export default Starting;