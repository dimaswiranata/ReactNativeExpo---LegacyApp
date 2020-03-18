import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

export default function PlaceInput({ onPlaceAdded }) {
  const [placeName, setPlaceName] = useState('');

  const placeNameChangedHandler = (val) => {
    setPlaceName(val)
  };

  const placeSubmitHandler = () => {
    if (placeName.trim() === ""){
      return;
    }

    onPlaceAdded(placeName)
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        value={placeName}
        placeholder='an awesome place'
        onChangeText={placeNameChangedHandler}
        style={styles.placeInput}
      />
      <Button 
        title='Add'
        style={styles.placeButton}
        onPress={placeSubmitHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placeInput : {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#006400'
  },
  placeButton :{
    width: '30%',
  },
  inputContainer : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})

PlaceInput.propTypes = { 
  onPlaceAdded : PropTypes.func
}

PlaceInput.defaultProps = {}
