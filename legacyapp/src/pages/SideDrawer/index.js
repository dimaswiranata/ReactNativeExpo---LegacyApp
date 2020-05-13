import React, { Component } from 'react';
import Header from '../../components/Header';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

class SideDrawer extends Component{
  render() {
    return (
      <>
        <Header
          title='Side Drawer'
          openDrawer={ true }
        />
        <View
          style={[
            styles.container
          ]}
        >
          <Text>Side Drawer Screen</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: 'white',
    flex: 1
  }
});

export default SideDrawer;