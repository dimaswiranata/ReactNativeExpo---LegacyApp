import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import style from './styles';
import { SearchBar } from 'react-native-elements';
import Colors from '../../styles/Colors';
import PropTypes from 'prop-types';

export default function SearchTextField({ containerStyle, searchContainerStyle, inputContainerStyle, inputStyle }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearchQuery = (newSearchQuery) => setSearchQuery(newSearchQuery);

  return (
    <View style={[style.main, containerStyle]}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={onChangeSearchQuery}
        value={searchQuery}
        containerStyle={[styles.searchContainer, searchContainerStyle]}
        inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
        inputStyle={[styles.input, inputStyle]}
      />
    </View>
  );
}

SearchTextField.propTypes = {
  searchContainerStyle: PropTypes.object,
  inputContainerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  containerStyle: PropTypes.object,
}

SearchTextField.defaultProps = {
  searchContainerStyle: {},
  inputContainerStyle: {},
  inputStyle: {},
  containerStyle: {}
}

const styles = StyleSheet.create({
  searchContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.tertiary,
    elevation: 5
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 200
  },
  input: {
    fontSize: 15
  }
})

