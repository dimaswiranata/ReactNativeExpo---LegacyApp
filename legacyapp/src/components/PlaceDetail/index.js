import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../Icon';

export default function PlaceDetail({selectedPlace, onItemDeleted, onModalClosed}) {
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
    <Modal onRequestClose={onModalClosed} visible={selectedPlace !== null} animationType='slide'>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon
                type= {'Ionicons'}
                name= {'ios-trash'}
                size= {30}
                color= {'red'}
              />
            </View>
          </TouchableOpacity>
          <Button title='Close' onPress={onModalClosed}/>
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
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
})

PlaceDetail.propTypes = {  
  selectedPlace: PropTypes.array,
  onItemDeleted: PropTypes.func,
  onModalClosed: PropTypes.func
}

PlaceDetail.defaultProps = {}
