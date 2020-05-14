import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { useDispatch } from 'react-redux';
import { deletePlace } from '../../core/actions';
import NavigationUtils from '../../utils/navigation.utils';

import Icon from '../../components/Icon';
import Header from '../../components/Header';

const PlaceDetail = ({ route, navigation }) => {

  const { title, selectedPlace } = route.params;

  const dispatch = useDispatch();

  const placeDeletedHandler = () => {
    dispatch(deletePlace(selectedPlace.key));
    NavigationUtils.navigate('InApp');
  }

  return (
    <>
      <Header
        title={title}
        backButton={ true }
      />
      <View style={styles.container}>
        <View>
          <Image source={{uri : selectedPlace.image}} style={styles.placeImage}/>
          <Text style={styles.placeName}>{selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={placeDeletedHandler}
          >
          {/* <TouchableOpacity> */}
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
    margin: 22
  },
  placeImage : {
    width: '100%',
    height: 300
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
})

export default PlaceDetail;
