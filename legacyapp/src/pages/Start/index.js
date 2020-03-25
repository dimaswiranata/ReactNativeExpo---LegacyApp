import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import PlaceList from '../../components/PlaceList';
import PlaceInput from '../../components/PlaceInput';
import PlaceDetail from '../../components/PlaceDetail';
import { connect } from 'react-redux';
import {addPlace, deletePlace, selectPlace, deselectPlace} from '../../core/actions'
import { images } from '../../utils/images.utils';

class Starting extends Component {

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  };
  render(){
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.props.places} 
          // onItemDeleted={placeDeletedHandler}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    )
  }
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

const mapStateToProps = state => {
  return{
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starting);