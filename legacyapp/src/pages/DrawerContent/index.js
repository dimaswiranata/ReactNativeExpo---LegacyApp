import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../core/actions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationUtils from '../../utils/navigation.utils';

export function DrawerContent({props}) {
  const dispatch = useDispatch();  

  const savePlaceHandler = () => {
    dispatch(logout());
    NavigationUtils.closeDrawer();
  };

  return(
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name='exit-to-app'
                  color={color}
                  size={size}
                />
              )}
              label='Sign Out'
              onPress={savePlaceHandler}
           />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  }
});