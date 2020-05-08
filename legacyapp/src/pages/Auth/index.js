import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavigationUtils from '../../utils/navigation.utils';

class AuthScreen extends Component {

  loginHandler= () => {
    NavigationUtils.navigate('InApp');
  }

  render () {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button  title='Login' on onPress={() => this.loginHandler()}/>
      </View>
    );
  }
}

export default AuthScreen;