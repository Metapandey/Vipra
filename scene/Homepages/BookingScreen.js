import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import pan from '/home/ayushpandey/Documents/Vipra/Image/pandit.jpg';

// import {SliderBox} from 'react-native-image-slider-box';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
export default class BookingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderHomeBooking}>
          <Text style={styles.textMyProfile}>My Bookings</Text>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <AppContainerTop />
        </SafeAreaView>
      </View>
    );
  }
}
class Ongoing extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}
class History extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ebd9',
  },
  textMyProfile: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B21F02',
    position: 'absolute', // child
    marginTop: '8%',
    left: '7%',
    marginEnd: 20,
  },
  HeaderHomeBooking: {
    // marginBottom: 10,
    width: '100%',
    height: '18%',
    backgroundColor: '#f5ebd9',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
});
const TabNavigatorTop = createMaterialTopTabNavigator(
  {
    BOOKOngoing: {
      screen: Ongoing,
      navigationOptions: {
        tabBarLabel: 'Ongoing',
      },
    },
    BOOKHistory: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
      },
    },
  },
  {
    initialRouteName: 'BOOKOngoing',
    tabBarPosition: 'top',
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      height: null,
      style: {
        backgroundColor: '#f5ebd9',
      },
      indicatorStyle: {
        height: 5,
        backgroundColor: '#B21F02',
      },
    },
    swipeEnabled: false,
  },
);
const AppContainerTop = createAppContainer(TabNavigatorTop);
