import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import {addPlace, deletePlace } from '../../core/actions';

import Header from '../../components/Header';
import PlaceInput from '../../components/PlaceInput';

class SharePlace extends Component {

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  render () {
    return (
      <>
        <Header 
          title='Share Place'
        />
        <View>
          <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return{
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePlace);