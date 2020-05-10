import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import PlaceList from '../../components/PlaceList';

class FindPlace extends Component {

  render () {
    return (
      <>
        <Header 
          title='Find Place'
        />
        <View>
          <PlaceList 
            places={this.props.places}
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
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlace);