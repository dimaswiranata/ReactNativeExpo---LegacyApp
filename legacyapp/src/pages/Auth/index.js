import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import NavigationUtils from '../../utils/navigation.utils';
import Icon from '../../components/Icon';

class AuthScreen extends Component {

  state = {
    showPassword: true,
    showConfirmPassword: true
  }

  showPasswordHandler = () => {
    this.setState({showPassword: !this.state.showPassword});
  }

  showConfirmPasswordHandler = () => {
    this.setState({showConfirmPassword: !this.state.showConfirmPassword});
  }

  loginHandler= () => {
    NavigationUtils.navigate('InApp');
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title='Switch to Login'/>
        <Input
          placeholder='email@address.com'
          label='Your Email Address'
          leftIcon={
            <Icon 
              name="mail" 
              type='Entypo' 
              color='gray' 
              size={24} 
            />
          }
        />
        <Input
          placeholder='Password'
          label='Password'
          secureTextEntry={!this.state.showPassword ? false : true}
          leftIcon={
            <Icon 
              name="lock" 
              type='Entypo' 
              color='gray' 
              size={24} 
            />
          }
          rightIcon={
            <TouchableOpacity onPress={this.showPasswordHandler}>
              { !this.state.showPassword ? (
                <Icon 
                  name="md-eye"
                  type='Ionicons' 
                  color='gray' 
                  size={24} 
                /> 
                ):(
                <Icon 
                  name="md-eye-off"
                  type='Ionicons' 
                  color='gray' 
                  size={24} 
                /> 
                )
              }
            </TouchableOpacity>
          }
        />
        <Input
          placeholder='Confirm Password'
          label='Confirm Password'
          secureTextEntry={!this.state.showConfirmPassword ? false : true}
          leftIcon={
            <Icon 
              name="lock" 
              type='Entypo' 
              color='gray' 
              size={24} 
            />
          }
          rightIcon={
            <TouchableOpacity onPress={this.showConfirmPasswordHandler}>
              { !this.state.showConfirmPassword ? (
                <Icon 
                  name="md-eye"
                  type='Ionicons' 
                  color='gray' 
                  size={24} 
                /> 
                ):(
                <Icon 
                  name="md-eye-off"
                  type='Ionicons' 
                  color='gray' 
                  size={24} 
                /> 
                )
              }
            </TouchableOpacity>
          }
        />
        <Button  title='Submit' onPress={() => this.loginHandler()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
})

export default AuthScreen;