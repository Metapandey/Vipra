/* eslint-disable no-unused-vars */

import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import LoadingScreen from './scene/LoadingScreen';
import introSlider from './scene/introSlider';
import LoginScreen from './scene/LoginScreen';
import Home from './scene/Home';
import Register from './scene/Registration';
import firebase from '@react-native-firebase/app';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="Loading"
            component={LoadingScreen}
            initial={true}
            hideNavBar={true}
          />
          <Scene key="Intro" component={introSlider} hideNavBar={true} />
          <Scene key="Auth" component={LoginScreen} hideNavBar={true} />
          <Scene key="Register" component={Register} hideNavBar={true} />
          <Scene key="home" component={Home} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
