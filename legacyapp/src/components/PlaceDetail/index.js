import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default function PlaceDetail({selectedPlace}) {
  let modalContent = null;
  if (selectedPlace){
    modalContent =(
      <View>
        <Image source={{uri : selectedPlace.image}} style={styles.placeImage}/>
        <Text style={styles.placeName}>{selectedPlace.name}</Text>
      </View>
    );
  };
  return (
    <Modal visible={selectedPlace !== null} animationType='slide'>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title='Delete' color='red'/>
          <Button title='Close'/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage : {
    width: '100%',
    height: 300
  },
  placeName: {
    fontWeight: 'bold'
  }
})

PlaceDetail.propTypes = {  
  selectedPlace: PropTypes.node
}

PlaceDetail.defaultProps = {}
