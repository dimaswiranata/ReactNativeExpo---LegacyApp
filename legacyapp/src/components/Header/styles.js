import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors'
import { theme } from '../../styles/theme.styles';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.tertiary,
    paddingTop: theme.DEVICE.STATUSBAR_HEIGHT + 15,
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 10,
  },
  leftContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftTransparent: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  centerContainer: { 
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: { 
    color: '#fff', 
    fontSize: 17
  },
  rightContainer: {
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  },
  homeHeaderContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: theme.DEVICE.STATUSBAR_HEIGHT + 5,
    zIndex: 10,
    height: 75
  },
  rightContainerHomeHeader: {
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '10%',
    height: '100%'
  }
})

export default styles;