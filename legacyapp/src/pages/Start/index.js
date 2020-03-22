import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import PropTypes from 'prop-types';
import PlaceList from '../../components/PlaceList';
import PlaceInput from '../../components/PlaceInput';
import PlaceDetail from '../../components/PlaceDetail';
import { images } from '../../utils/images.utils';

const Starting = (props) => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const placeAddedHandler = (placeName) => {
    setPlaces(
      places.concat(
        {
          key : Math.random(),
          name : placeName,
          //Static Image
          // image: images.STATICIMAGE
          // Network Image
          image : 'https://a2.udemycdn.com/2017-11-28_22-12-06-81f19b918bd7c42cff55269192f98f5e/original.jpg?nva=20200318234406&token=0f52448571fc9291e561d'
        }
      )
    );
  };

  // const placeDeletedHandler = (key) => {
  //   setPlaces(places => places.filter(place => {
  //     return place.key !== key;
  //   }));
  // };

  const placeSelectedHandler = (key) => {
    setSelectedPlace(places.find(place => place.key === key));
  };

  return (
    <View style={styles.container}>
      <PlaceDetail selectedPlace={selectedPlace}/>
      <PlaceInput onPlaceAdded={placeAddedHandler}/>
      <PlaceList 
        places={places} 
        // onItemDeleted={placeDeletedHandler}
        onItemSelected={placeSelectedHandler}
      />
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