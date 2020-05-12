import React from 'react';
import Header from '../../components/Header';
import { View, Text } from 'react-native';

const SideDrawer = props => {
  return (
    <>
      <Header
        title='Side Drawer'
        openDrawer={ true }
      />
      <View>
        <Text>Side Drawer Screen</Text>
      </View>
    </>
  );
}

export default SideDrawer;