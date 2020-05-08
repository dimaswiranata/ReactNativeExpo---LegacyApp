import { 
  Dimensions, 
  StatusBar,
  Platform
} from 'react-native'

let {height, width} = Dimensions.get('window')
let DEVICE_HEIGHT = Platform.OS === 'android' ? height - StatusBar.currentHeight : height - 20;
let STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

let theme =  {
  FONT: {
    SIZE: {
      SMALL: 12,
      MEDIUM: 14,
      LARGE: 16,

      H1: 96,
      H2: 60,
      H3: 48,
      H4: 34,
      H5: 24,
      H6: 20,
      SUBTITLE1: 16,
      SUBTITLE2: 14,
      BODY1: 16,
      BODY2: 14,
      BUTTON: 14,
      CAPTION: 12,
      OVERLINE: 10
    },
    CATEGORY: {
      H1: {
        SIZE: 50,
        CASE: 'none' ,
        LETTERSPACING: -1.5,
        LINEHEIGHT: 65,
        FONTFAMILY: 'AirbnbCerealBold'
      },   
      H2: {
        SIZE: 38,
        CASE: 'none' ,
        LETTERSPACING: -0.5,
        LINEHEIGHT: 49,
        FONTFAMILY: 'AirbnbCerealBook'
      },
      H3: {
        SIZE: 28,
        CASE: 'none' ,
        LETTERSPACING: 0,
        FONTFAMILY: 'AirbnbCerealBook'
      },
      H4: {
        SIZE: 21,
        CASE: 'none' ,
        LETTERSPACING: 0.25,
        FONTFAMILY: 'AirbnbCerealBook'
      },
      H5: {
        SIZE: 12,
        CASE: 'uppercase' ,
        LETTERSPACING: 0,
        FONTFAMILY: 'AirbnbCerealBold'
      },
      BODY: {
        SIZE: 16,
        CASE: 'none' ,
        LETTERSPACING: 0.5,
        FONTFAMILY: 'AirbnbCerealBook',
        LINEHEIGHT: 24
      },
      BODYM: {
        SIZE: 16,
        CASE: 'none' ,
        LETTERSPACING: 0.5,
        FONTFAMILY: 'AirbnbCerealMedium',
        LINEHEIGHT: 24
      },
      SMALL: {
        SIZE: 12,
        CASE: 'none' ,
        LETTERSPACING: 0.25,
        WEIGHT: 'REGULAR',
        FONTFAMILY: 'AirbnbCerealBook',
      },
      BUTTON: {
        SIZE: 14,
        CASE: 'uppercase' ,
        LETTERSPACING: 1.25,
        WEIGHT: 'SEMIBOLD'
      },
      CAPTION: {
        SIZE: 12,
        CASE: 'none' ,
        LETTERSPACING: 0.4,
        WEIGHT: 'REGULAR'
      },
      OVERLINE: {
        SIZE: 10,
        CASE: 'none' ,
        LETTERSPACING: 1.5,
        WEIGHT: 'REGULAR'
      },
    },
  },
  DEVICE: {
    HEIGHT: DEVICE_HEIGHT,
    WIDTH: width,
    STATUSBAR_HEIGHT: STATUSBAR_HEIGHT
  },
  COLOR: {
    BLACKGRAY5: '#414B5A',
    BLACKGRAY4: '#5E6673',
    BLACKGRAY3: '#979CA4',
    BLACKGRAY2: '#C6C9CE',
    BLACKGRAY1: '#F5F6F7',

    BLUE: '#4263EB',
    RED: '#D84910',
    PINK: '#F784AD',
    YELLOW: '#F1D678',
    GREEN: '#1EC086',
    LOWBLUE: '#56CCF2',

    PRIMARY: '#343B5A'
  },
}

export { theme };