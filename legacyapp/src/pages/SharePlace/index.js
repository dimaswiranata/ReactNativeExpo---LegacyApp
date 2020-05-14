import React, { Component } from 'react';
import { View, Text, Image ,Button, StyleSheet, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import {addPlace, deletePlace } from '../../core/actions';

import Header from '../../components/Header';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';

class SharePlace extends Component {

  state = {
    placeName: ''
  }

  placeNameChangedHandler = (value) => {
    if (value.trim().length >= 0 ) {
      this.setState({placeName: value});
    }
  }

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== ''){
      this.props.onAddPlace(this.state.placeName);
    }
  };

  render () {
    return (
      <>
        <Header 
          title='Share Place'
        />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textHeading}>Share a Place with us!</Text>
            <PickImage/>
            <PickLocation/>
            <Input
              placeholder='Place Name'
              inputContainerStyle={styles.input}
              value={this.state.placeName}
              onChangeText={value => this.placeNameChangedHandler(value)}
            />
            <View style={styles.button}>
              <Button 
                title='Share the Place!'
                onPress={this.placeAddedHandler}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  previewImage: {
    width: '100%',
    height: '100%'
  },
  textHeading: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  input: {
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 5,
    margin: 8,
    backgroundColor: '#eee'
  },
  button: {
    margin: 8
  }
});

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