import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../../components/LIstItem';

const Starting = (props) => {
  const [placeName, setPlaceName] = useState('');
  const [places, setPlaces] = useState([]);

  const placeNameChangedHandler = (val) => {
    setPlaceName(val)
  };

  const placeSubmitHandler = () => {
    if (placeName.trim() === ""){
      return;
    }

    setPlaces(places => places.concat(placeName));
  };

  const placesOutput = places.map((place, i) => (
    <ListItem 
      key={i}
      placeName={places}
    />
  ));

  return (
    <View style={styles.container}>
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
      <View>
        {placesOutput}
      </View>
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
  },
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
  }
})

Starting.propTypes = {
  text: PropTypes.string
}

Starting.defaultProps = {
  text: 'example prop'
}

export default Starting;