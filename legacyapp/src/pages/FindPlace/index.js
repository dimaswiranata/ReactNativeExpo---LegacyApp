import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header';

class FindPlace extends Component {

  render () {
    return (
      <>
        <Header 
          title='Share Place'
        />
        <View>
          <Text>FindPlace Screen</Text>
        </View>
      </>
    );
  }
}

export default FindPlace;