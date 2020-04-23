/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderProfile}>
          <Text style={styles.textMyProfile}>My Profile</Text>
        </View>
        <View style={styles.ProfileView1}>
          <Text
            style={{
              marginTop: '2%',
              marginStart: '8%',
              fontWeight: 'bold',
              fontSize: 10,
              color: 'red',

              // borderWidth: '30%',
            }}>
            CONFIGURATION
          </Text>
          <Text
            style={{
              marginTop: '3%',
              marginStart: '20%',
              fontSize: 20,
              color: 'black',
              // borderWidth: '30%',
            }}>
            Change password
          </Text>
          <View
            style={{
              marginTop: '-4%',
              marginStart: '8%',

              // borderWidth: '30%',
            }}>
            <Text> ________________________________________</Text>
          </View>
          <Text
            style={{
              marginTop: '0%',
              marginStart: '20%',
              fontSize: 20,
              color: 'black',
              // borderWidth: '30%',
            }}>
            Language
          </Text>
          <View
            style={{
              marginTop: '-4%',
              marginStart: '8%',

              // borderWidth: '30%',
            }}>
            <Text> ________________________________________</Text>
          </View>
          <Text
            style={{
              marginTop: '-1%',
              marginStart: '20%',
              fontSize: 20,
              color: 'black',
              // borderWidth: '30%',
            }}>
            Logout
          </Text>
        </View>
        <View style={styles.ProfileView2}>
          <Text
            style={{
              marginTop: '2%',
              marginStart: '8%',
              fontWeight: 'bold',
              fontSize: 10,
              color: 'red',

              // borderWidth: '30%',
            }}>
            OTHER
          </Text>
          <Text
            style={{
              marginTop: '3%',
              marginStart: '20%',
              fontSize: 20,
              color: 'black',
              // borderWidth: '30%',
            }}>
            About Us
          </Text>
          <View
            style={{
              marginTop: '-4%',
              marginStart: '8%',

              // borderWidth: '30%',
            }}>
            <Text> ________________________________________</Text>
          </View>
          <Text
            style={{
              marginTop: '0%',
              marginStart: '20%',
              fontSize: 20,
              color: 'black',
              // borderWidth: '30%',
            }}>
            Contact Us
          </Text>
          <View
            style={{
              marginTop: '-4%',
              marginStart: '8%',

              // borderWidth: '30%',
            }}>
            <Text> ________________________________________</Text>
          </View>
          <Text
            style={{
              marginTop: '-1%',
              marginStart: '20%',
              fontSize: 20,
              color: 'black',
              // borderWidth: '30%',
            }}>
            Setting
          </Text>
        </View>
      </View>
    );
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
  HeaderProfile: {
    marginBottom: 10,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    height: '16%',
    backgroundColor: '#f5ebd9',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    // borderBottomWidth: 3,
    // borderBottomColor:'grey',
    // elevation: 10,
  },
});
