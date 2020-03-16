import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { Image, Button } from 'react-native-elements';
import { images } from '../../utils/images.utils';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
    
  },
  text: {
    color: '#000',
    fontSize: 14,
    marginTop: 30,
    textAlign: 'center'
  },
  swiperDot: { 
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#00233B'
  },
  swiperActiveDot: { 
    backgroundColor: '#00233B', 
    borderWidth: 1, 
    borderColor: '#00233B' 
  },
  slideImageContainer: { 
    height: '75%', 
    width: '100%', 
    backgroundColor: 'white', 
    flex: 2.7 
  },
  slideImage: { 
    height: '100%', 
    width: '100%' 
  },
  slideTextContainer: { 
    flex: 1, 
    paddingHorizontal: 20 
  },
  buttonStyle: { 
    borderRadius: 100, 
    paddingHorizontal: 10, 
    height: 50, 
    backgroundColor: '#00233B' 
  },
  buttonContainer: { 
    padding: 20, 
    paddingTop: 5, 
    backgroundColor: '#fff' 
  }
})

class OnBoardingPage extends React.Component {

  constructor(props){
    super(props);
  
    this.state = {
      // Error Handling
      hasError: false,
      index: 0,
      endOfPage: false,
    }
  
  }

  /*
  ========================================================
  METHOD - HANDLERS
  ========================================================
  */

  onNext = () => {
    let { index, endOfPage } = this.state;
    let next = index + 1;
    if(endOfPage == false) {
      this.setState({index: next})
      this.refs.swiper.scrollBy(1)
    } else {
      console.group('onNext');
      console.log('react the end');
      console.groupEnd();
    }
  }

  // internal function
  _onIndexChanged = (index) => {
    this.setState({index})
    if (index === 10){
      this.setState({ endOfPage: true });
    } else {
      this.setState({ endOfPage: false });
    }
  }

  render() {
    return (
      <>
        <Swiper 
          // eslint-disable-next-line react/no-string-refs
          ref='swiper'
          style={styles.wrapper} 
          horizontal={true}
          showsButtons={false}
          loop={false}
          onIndexChanged={(i) => this._onIndexChanged(i)}
          dotStyle={styles.swiperDot}
          activeDotStyle={styles.swiperActiveDot}
        >
          <View style={styles.slide}>
            <View style={styles.slideImageContainer}>
              <Image
                source={images.ONBOARDING._1}
                style={styles.slideImage}
                resizeMethod="auto"
                resizeMode="cover"
              />
            </View>
            <View style={ styles.slideTextContainer }>
              <Text style={styles.text}>Enjoy your interesting experience in search and easy ordering</Text>
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slideImageContainer}>
              <Image
                source={images.ONBOARDING._2}
                style={styles.slideImage}
                resizeMethod="auto"
                resizeMode="cover"
              />
            </View>
            <View style={styles.slideTextContainer}>
              <Text style={styles.text}>Enjoy complete services to support what your needs</Text>
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slideImageContainer}>
              <Image
                source={images.ONBOARDING._3}
                style={styles.slideImage}
                resizeMethod="auto"
                resizeMode="cover"
              />
            </View>
            <View style={styles.slideTextContainer}>
              <Text style={styles.text}>Create your account to get started</Text>
            </View>
          </View>
          
        </Swiper>
        <View
          style={styles.buttonContainer}
        >
          <Button
            title="Get Started"
            buttonStyle={styles.buttonStyle}
            onPress={() => this.onNext()}
          />
        </View>
        </>
    )
  }
}

export default OnBoardingPage;

