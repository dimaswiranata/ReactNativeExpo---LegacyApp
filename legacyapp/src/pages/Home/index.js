import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import ScanIconSVG from '../../assets/images/scan-icon.svg'

const Home = (props) => {
  return (
    <View>
      <ScanIconSVG
        width={30}
        height={30}
        style={{ marginRight: 10 }}
      />
    </View>
  )
}

Home.propTypes = {
  exampleProp: PropTypes.string, // PropTypes example
}

Home.defaultProps = {
  exampleProp: 'example prop', // Default props Example
}

export default Home;