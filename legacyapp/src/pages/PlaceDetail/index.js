import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, Dimensions} from 'react-native';
import MapView from "react-native-maps";
import { useDispatch } from 'react-redux';
import { deletePlace } from '../../core/actions';
import NavigationUtils from '../../utils/navigation.utils';

import Icon from '../../components/Icon';
import Header from '../../components/Header';

const PlaceDetail = ({ route, navigation }) => {

  const { selPlace } = route.params;

  const dispatch = useDispatch();

  const placeDeletedHandler = () => {
    dispatch(deletePlace(selectedPlace.key));
    NavigationUtils.navigate('Find');
  }

  return (
    <>
      <Header
        title={selPlace.name}
        backButton={ true }
      />
      <View style={styles.container}>
        <View style={styles.placeDetailContainer}>
          <View style={styles.subContainer}>
            <Image 
              source={selPlace.image} 
              style={styles.placeImage}
            />
          </View>
          <View style={styles.subContainer}>
            <MapView
              initialRegion={{
                ...selPlace.location, 
                latitudeDelta: 0.0122,
                longitudeDelta:
                  Dimensions.get("window").width /
                  Dimensions.get("window").height *
                  0.0122}}
              style={styles.map}
            >
              <MapView.Marker coordinate={selPlace.location} />
            </MapView>
          </View>
          <Text style={styles.placeName}>{selPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon
                type= {'Ionicons'}
                name= {Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                size= {30}
                color= {'red'}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  },
  placeDetailContainer: {
    flex: 2
  },
  placeImage: {
    width: "100%",
    height: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  }
});

export default PlaceDetail;
