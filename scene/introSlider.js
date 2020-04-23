/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import {Actions} from 'react-native-router-flux';
// const switchToAuth = () => {
//   Actions.replace('Auth');
// }; //This Method will help in switching Logo screen to splashscreen
function logHello() {
  
}
export default class introSlider extends React.Component {
  state = {
    showRealApp: false,
  };
  _onDone = () => {
    this.setState(Actions.Auth);
  };
  _onSkip = () => {
    this.setState(Actions.Auth);
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          // alignItems: 'center',
          paddingStart: '11%',
        }}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.text2}>{item.text2}</Text>
      </View>
    );
  };
  render() {
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>yeh hai sign in and login screen to be continued....</Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: '35%',
    marginBottom: '10%',
    marginStart: '13%',
  },
  text2: {
    fontSize: 14,
    color: '#747474',
    // textAlign: 'justify',
    // marginLeft: '3%',
  },
  text: {
    fontSize: 27,
    color: 'black',
    // textAlign: 'justify',
    fontWeight: '900',
    // marginLeft: '3%',
    // paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    color: 'rgba(227, 56, 13, 1)',
    // textAlign: 'left',
    // marginBottom: 16,
    // marginLeft: '3%',
  },
});

const slides = [
  {
    key: 's1',
    backgroundColor: '#f5ebd9',
    title: 'HIGH QUALITY STANDARDS',
    // rgba(227, 56, 13, 1) best color
    text: 'One-Stop Solution \nFor All Pooja Needs',
    text2:
      'Your ceremonies need expert guidance,\nand who better to give it life than our\ntop class quality pūjā service. Catering\nall Hindu religious ceremonial\nrequirements for Graha pravēśa,\nVivāha, Durgā pūjā.\n',
    // high quality standards
    image: require('../Image/ONBOARDING-1-IMAGE.png'),
  },
  {
    key: 's2',
    backgroundColor: '#f5ebd9',
    title: 'EASY & QUICK BOOK',
    // rgba(227, 56, 13, 1) best color
    text: 'Plan Your Ceremonies\n With Us!',
    text2:
      'At Vipra we provide you with variety of\ncomprehensive ceremonial packages,\nguides and support that simplifies your\nsacred rituals. We take responsibility\nfor your religious ceremony assistance\neliminating the geographical limitation.\n',
    // high quality standards
    image: require('../Image/ONBOARDING-2-IMAGE.png'),
  },
  {
    key: 's3',
    backgroundColor: '#f5ebd9',
    title: 'CERTIFIED EXPERTS',
    // rgba(227, 56, 13, 1) best color
    text: 'Pandit Booking In\n Simple Clicks',
    text2:
      'Find the śrōtriya guru closest to you by\nname, location, experiences. View their\nprofile, service feedback, fee and\nappoint the right pandit that suits you.\nConsult Vaidika and Vāstu Scholars.\n',
    // high quality standards
    image: require('../Image/ONBOARDING-3-IMAGE.png'),
  },
];
