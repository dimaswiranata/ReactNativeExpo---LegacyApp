import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import NavigationUtils from '../../utils/navigation.utils';
import ImageUtils from '../../utils/images.utils';
import Icon from '../../components/Icon';
import { tryAuth } from '../../core/actions';

class AuthScreen extends Component {

  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    authMode: 'login',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: true,
    showConfirmPassword: true,
    isValidUser: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    buttonDisabledUser: false,
    buttonDisabledPassword: false,
    buttonDisabledConfirmPassword: false
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      };
    });
  };

  checkDisabledButton(user, password, confirmPassword) {
    let buttonEnabled = true;

    if (user && password && confirmPassword){
      buttonEnabled = false
    } else {
      buttonEnabled = true
    }

    return buttonEnabled;
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  showPasswordHandler = () => {
    this.setState({showPassword: !this.state.showPassword});
  }

  showConfirmPasswordHandler = () => {
    this.setState({showConfirmPassword: !this.state.showConfirmPassword});
  }

  handleEmailChange = (value) => {
    let isValid = true;

    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value);

    if (value.trim().length >= 0 ) {
      this.setState({password: value, isValidUser: isValid, buttonDisabledUser: true});
    }

    if (value.trim().length >= 0 ) {
      this.setState({password: value, isValidUser: isValid});
    }
  }

  handlePasswordChange = (value) => {
    if (value.trim().length >= 6 ) {
      this.setState({password: value, isValidPassword: true, buttonDisabledPassword: true});
    } else {
      this.setState({password: value, isValidPassword: false});
    }
  }

  handleConfirmPasswordChange = (value) => {
    if (value.trim() === this.state.password ) {
      this.setState({confirmPassword: value, isValidConfirmPassword: true, buttonDisabledConfirmPassword: true});
    } else {
      this.setState({confirmPassword: value, isValidConfirmPassword: false});
    }
  }

  loginHandler= () => {
    const authData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.onLogin(authData);
    NavigationUtils.navigate('InApp');
  }

  render () {
    return (
      <ImageBackground source={ImageUtils.BACKGROUND_IMG} style={styles.backgroundImage}>
        <View style={styles.container} behavior='padding'>
          <Text style={styles.textHeading}>Please Log In</Text>
          <Button  
            title={`Switch to ${this.state.authMode === 'login' ? 'Sign Up' : 'Login'}`}
            buttonStyle={styles.button}
            onPress={this.switchAuthModeHandler}
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
              <Input
                placeholder='email@address.com'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={value => this.handleEmailChange(value)}
                errorMessage={!this.state.isValidUser ? 'Please enter a valid email address' : null}
                leftIcon={
                  <Icon 
                    name="mail" 
                    type='Entypo' 
                    color='gray' 
                    size={24} 
                  />
                }
                inputContainerStyle={!this.state.isValidUser ? styles.invalidInput : styles.input}
              />
              <Input
                placeholder='Password'
                secureTextEntry={!this.state.showPassword ? false : true}
                onChangeText={value => this.handlePasswordChange(value)}
                errorMessage={!this.state.isValidPassword ? 'Password at least 6 characters' : null}
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
                inputContainerStyle={!this.state.isValidPassword ? styles.invalidInput : styles.input}
              />
              { this.state.authMode === 'signup' ?
                <Input
                  placeholder='Confirm Password'
                  secureTextEntry={!this.state.showConfirmPassword ? false : true}
                  onChangeText={value => this.handleConfirmPasswordChange(value)}
                  errorMessage={!this.state.isValidConfirmPassword ? 'The confirmation and password do not match' : null}
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
                  inputContainerStyle={!this.state.isValidConfirmPassword ? styles.invalidInput : styles.input}
                />
                : null
              }
            </View>
          </TouchableWithoutFeedback>
          <Button  
            title='Submit' 
            onPress={() => this.loginHandler()}
            buttonStyle={styles.button}
            disabled={this.checkDisabledButton(this.state.buttonDisabledUser, this.state.buttonDisabledPassword, this.state.buttonDisabledConfirmPassword)}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '90%'
  },
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent'
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  input: {
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 5,
    margin: 8,
    backgroundColor: '#eee',
    borderRadius: 10
  },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
    margin: 8,
    backgroundColor: '#f9c0c0',
    borderRadius: 10
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 300
  }
})

const mapStateToProps = state => {
  return{
    //
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onLogin: (authData) => dispatch(tryAuth(authData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);