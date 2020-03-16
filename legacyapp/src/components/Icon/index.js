import React from 'react';
import { Text } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconZocial from 'react-native-vector-icons/Zocial'
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import PropTypes from 'prop-types';

const iconRenderer = ( props ) =>  {
  switch ( props.type ) {
    case 'AntDesign':
        return ( <IconAntDesign 
          name={ props.name }
          size={ props.size }
          color={ props.color }
        /> )

    case 'Entypo':
      return ( <IconEntypo 
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'EvilIcons':
      return ( <IconEvilIcons 
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'Feather':
      return ( <IconFeather
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'FontAwesome':
      return ( <IconFontAwesome
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'FontAwesome5':
      return ( <IconFontAwesome5
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'Foundation':
      return ( <IconFoundation
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'Ionicons':
      return ( <IconIonicons
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )
      

    case 'MaterialIcons':
      return ( <IconMaterialIcons
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'MaterialCommunityIcons':
      return ( <IconMaterialCommunityIcons
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'Octicons':
      return ( <IconOcticons
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'Zocial':
      return ( <IconZocial
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )

    case 'SimpleLineIcons':
      return ( <IconSimpleLineIcons
        name={ props.name }
        size={ props.size }
        color={ props.color }
      /> )    
    
    default:
      return <Text> null </Text>
      
  }
}

iconRenderer.propTypes = {
  type: PropTypes.oneOf([ 'AntDesign','Entypo','EvilIcons',
                          'Feather','FontAwesome','FontAwesome5',
                          'Foundation','Ionicons','MaterialIcons',
                          'MaterialCommunityIcons','Octicons','Zocial',
                          'SimpleLineIcons' ]).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}

iconRenderer.defaultProps = {
  type: 'AntDesign',
  name: 'user',
  size: 20,
  color: '#000'
}

export default iconRenderer;