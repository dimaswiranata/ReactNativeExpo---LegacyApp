import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default function PlaceDetail({selectedPlace}) {
  let modalContent = null;
  if (selectedPlace){
    modalContent =(
      <View>
        <Image source={selectedPlace.placeImage}/>
        <Text>{selectedPlace.placeName}</Text>
      </View>
    );
  };
  return (
    <Modal visible={selectedPlace !== null}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title='Delete'/>
          <Button title='Close'/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  }
})

PlaceDetail.propTypes = {  
  selectedPlace: PropTypes.object
}

PlaceDetail.defaultProps = {}
