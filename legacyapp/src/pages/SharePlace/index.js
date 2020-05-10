import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header';

class SharePlace extends Component {
  render () {
    return (
      <>
        <Header 
          title='Share Place'
        />
        <View>
          <Text>SharePlace Screen</Text>
        </View>
      </>
    );
  }
}

export default SharePlace;