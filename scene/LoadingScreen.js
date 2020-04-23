/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */

import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  StyleSheet,
  Easing,
  StatusBar,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Logo from '../Image/Logo.png';
import {Actions} from 'react-native-router-flux';
import SplashScreenMask from 'react-native-splash-screen-mask';

const switchToSlider = () => {
  Actions.replace('Intro');
}; //This Method will help in switching Logo screen to splashscreen

class LoadingScreen extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };

  // componentDidMount() {

  // // constructor(props) {
  // //   super(props);
  // //   this.state = {
  // //     startValue: new Animated.Value(0),
  // //     textMove: new Animated.Value(0),
  // //     endValue: 1,
  // //     duration: 2000,
  // //   };
  // // } // this is also used with the fade up animation with the given code below
  // // componentDidMount() {

  // //   // Animated.timing(this.state.textMove, {
  // //   //   toValue: 100,
  // //   //   duration: 3000,
  // //   //   useNativeDriver: true,
  // //   // }),
  // //   Animated.timing(this.state.startValue, {
  // //     toValue: this.state.endValue,
  // //     duration: this.state.duration,
  // //     // useNativeDriver: true,/keep this disabled so that this code can work as it uses top style which is not supported by native code
  // //   }).start();

  // // } /YONDU remember that this animation is used to slide the icon from fading up

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SplashScreenMask
          imageSource={Logo}
          navigationAction={() => Actions.Intro()}
          backgroundStyle={styles.backgroundStyle}
          duration={3000}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    marginTop: 20,
    width: 223,
    height: 124,
    // resizeMode:"center",
  },
});
export default LoadingScreen;
{
  /* Rush Job is the background color */
}
{
  /* <LinearGradient colors={['#f5ebd9', '#f5ebd9']} style={styles.gradient}> */
}

{
  /* <Animated.View />/fade animation for above code// This is the first try animation or/ old one
          style={[ {opacity: this.state.startValue,top: this.state.startValue.interpolate({
        inputRange:[0,1],
        outputRange:[150,0]
      })}]}
        >
          <Image style={styles.stretch} source= {Logo} />
          </Animated.View> */
}
{
  /* </LinearGradient> */
}
