import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import PlaceList from '../../components/PlaceList';
import NavigationUtils from '../../utils/navigation.utils';

class FindPlace extends Component {

  itemSelectecdHandler = key => {

    const selPlace = this.props.places.find(place => {
      return place.key === key;
    })

    NavigationUtils.navigate('Detail', {
      title: selPlace.name,
      selectedPlace: selPlace
    })
  };

  render () {
    return (
      <>
        <Header 
          title='Find Place'
        />
        <View>
          <PlaceList 
            places={this.props.places}
            onItemSelected={this.itemSelectecdHandler}
          />
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
    onAddPlace: (name) => dispatch(addPlace(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlace);