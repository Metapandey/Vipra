/* eslint-disable no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HomeScreen from './Homepages/HomeScreen';
import BookingScreen from './Homepages/BookingScreen';
import HelpScreen from './Homepages/GetHelp';
import PurohitScreen from './Homepages/Purohit';
import ProfileScreen from './Homepages/Profile';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createAppContainer} from 'react-navigation';

const listItems = [
  'Development',
  'Business',
  'IT & Software',
  'Office Productivity',
  'Personal Development',
  'Design',
  'Marketing',
  'LifeStyle',
  'Photography',
  'Health & Fitness',
  'Teacher Training',
  'Music',
];

export default class Home extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Booking: {
      screen: BookingScreen,
      navigationOptions: {
        tabBarLabel: 'Bookings',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={[{color: tintColor}]}
              size={25}
              name={'address-book-o'}
            />
          </View>
        ),
        activeColor: '#f5ebd9',
        inactiveColor: '#f0edf6',
        barStyle: {backgroundColor: '#B21F02'},
      },
    },
    Help: {
      screen: HelpScreen,
      navigationOptions: {
        tabBarLabel: 'Get Help',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'phone'} />
          </View>
        ),
        activeColor: '#f5ebd9',
        inactiveColor: '#f0edf6',
        barStyle: {backgroundColor: '#B21F02'},
      },
    },
    Purohit: {
      screen: PurohitScreen,
      navigationOptions: {
        tabBarLabel: 'Purohit',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'user-secret'} />
          </View>
        ),
        activeColor: '#f5ebd9',
        inactiveColor: '#f0edf6',
        barStyle: {backgroundColor: '#B21F02'},
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'user-o'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#f0edf6',
    barStyle: {backgroundColor: '#B21F02'},
  },
);
const AppContainer = createAppContainer(TabNavigator);
