import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AuthScreen extends Component {

  loginHandler = () => {
    //...
  }

  render () {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button  title='Login' on onPress={this.loginHandler}/>
      </View>
    );
  }
}

export default AuthScreen;