import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import SearchBar from '../SearchTextField';
import NavigationUtils from '../../utils/navigation.utils';
import { theme } from '../../styles/theme.styles';

const propTypes = {
  leftComponent: PropTypes.element,
  centerComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  searchBar: PropTypes.bool,
  title: PropTypes.string,
  backButton: PropTypes.bool,
  backButtonTransparent: PropTypes.bool,
  homeButton: PropTypes.bool,
  titleStyle: PropTypes.object,
  leftContainerStyle: PropTypes.object,
  leftTransparentStyle : PropTypes.object,
  rightContainerStyle: PropTypes.object,
  headerContainerStyle: PropTypes.object,
  openDrawer: PropTypes.bool,
}
const defaultProps = {
  backButton: false,
  searchBar: false
}

const Header = ({
  headerContainerStyle,
  leftContainerStyle,
  leftComponent,
  title,
  titleStyle,
  backButtonTransparent,
  rightContainerStyle,
  leftTransparentStyle,
  rightComponent,
  centerComponent,
  backButton,
  homeButton,
  searchBar,
  openDrawer
}) => {
  const goBack = () => NavigationUtils.popAction();
  const openToggleDrawer = () => NavigationUtils.openDrawer();
  const goHome = () => NavigationUtils.navigate('InApp');
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
      <View 
        style={[ 
          styles.headerContainer, 
          headerContainerStyle, 
          { paddingBottom: searchBar ? 0 : 15 }
        ]}
      >
        <View style={[ styles.leftContainer, leftContainerStyle ]}>
          {
            backButton &&
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={goBack}
            >
              <Icon 
                name='arrow-left' 
                type='MaterialCommunityIcons'
                color={'#fff'} 
                size={25}
              />
            </TouchableOpacity>
          }
          {
            openDrawer &&
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={openToggleDrawer}
            >
              <Icon 
                name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
                type='Ionicons'
                color={'#fff'} 
                size={25}
              />
            </TouchableOpacity>
          }
          {
            title &&
            <Text style={[ styles.textHeader, titleStyle ]}>
              { title }
            </Text>
          }
          {
            leftComponent
          }
        </View> 
        {
          centerComponent &&
          <View style={ styles.centerContainer }>
          </View>
        }
        <View style={[ styles.rightContainer, rightContainerStyle ]}>
          {
            homeButton &&
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={goHome}
            >
              <Icon 
                name='home' 
                type='Entypo'
                color={'#fff'} 
                size={25}
              />
            </TouchableOpacity>
          }
          {
            rightComponent
          }
        </View>
      </View>
      {
        searchBar &&
        <SearchBar />
      }
    </>
  )
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export const HeaderTransparent = ({
  headerContainerStyle,
  leftContainerStyle,
  leftComponent,
  title,
  titleStyle,
  rightContainerStyle,
  rightComponent,
  centerComponent,
  backButton,
  homeButton,
  searchBar,
  openDrawer
}) => {
  const goBack = () => NavigationUtils.popAction();
  const goHome = () => NavigationUtils.navigate('InApp');
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
      <View 
        style={[ 
          styles.headerContainer, 
          headerContainerStyle, 
          { 
            paddingBottom: searchBar ? 0 : 15,
            backgroundColor: 'transparent' ,
            position: 'absolute',
            paddingTop: theme.DEVICE.STATUSBAR_HEIGHT + 5
          }
        ]}
      >
        <View style={[ styles.leftContainer, leftContainerStyle ]}>
          {
            backButton &&
            <TouchableOpacity
              style={{
                marginRight: 10,
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 200
              }}
              onPress={goBack}
            >
              <Icon 
                name='arrow-left' 
                type='MaterialCommunityIcons'
                color={'#000'} 
                size={25}
              />
            </TouchableOpacity>
          }
          {
            title &&
            <Text style={[ styles.textHeader, titleStyle ]}>
              { title }
            </Text>
          }
          {
            leftComponent
          }
        </View> 
        {
          centerComponent &&
          <View style={ styles.centerContainer }>
          </View>
        }
        <View style={[ styles.rightContainer, rightContainerStyle ]}>
          {
            homeButton &&
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={goHome}
            >
              <Icon 
                name='home' 
                type='Entypo'
                color={'#fff'} 
                size={25}
              />
            </TouchableOpacity>
          }
          {
            rightComponent
          }
        </View>
      </View>
      {
        searchBar &&
        <SearchBar />
      }
    </>
  )
}

HeaderTransparent.propTypes = propTypes;
HeaderTransparent.defaultProps = defaultProps;

export const HomeHeader = ({
  headerContainerStyle,
  leftContainerStyle,
  leftComponent,
  title,
  titleStyle,
  rightContainerStyle,
  rightComponent,
  centerComponent,
  backButton,
  searchBar,
  openDrawer
}) => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
      
      <View 
        style={[ 
          styles.homeHeaderContainer, 
          headerContainerStyle, 
        ]}
      >
        <SearchBar 
          containerStyle={{
            backgroundColor: 'transparent',
            height : '80%',
            flex: 1,
            alignSelf: 'center'
          }}
          searchContainerStyle={{
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderBottomColor: '#000',
            borderTopColor: '#000',
            paddingHorizontal: 15,
            backgroundColor: 'transparent',
            elevation: 0,
            padding: 0
          }}
          inputContainerStyle={{ elevation: 10}}
        />
        <View style={[ styles.rightContainerHomeHeader, rightContainerStyle ]}>
          {
            rightComponent
          }
          <TouchableOpacity
            style={{
              marginRight: 10
            }}
          >
            <Icon 
              name='ios-notifications' 
              type='Ionicons'
              color={'#fff'} 
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}


HomeHeader.propTypes = propTypes;
HomeHeader.defaultProps = defaultProps;

export default Header;