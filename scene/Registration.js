/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import InputTextField from './inputTextField';
import Icon from 'react-native-vector-icons/AntDesign';
import {Actions} from 'react-native-router-flux';
// import { Button } from 'react-native-paper';
// import {createStackNavigator} from 'react-navigation';

// import Home from '../Home/Home';

export default class Register extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <TouchableOpacity onPress={Actions.home} style={{top: 20, left: 10}}> */}
        <View onPress={Actions.home} style={{top: 20, left: 10}} >
          <Icon onPress={Actions.home} size={25} name={'back'} />
        </View>
        {/* </TouchableOpacity> */}
        <View>
          <View
            style={{
              left: 10,
              marginTop: 30,
              // alignItems: 'center',
              // justifyContent: 'center',
            }}>
            {/* <Image source={require('../Image/Logo.png')} /> */}
            <Text
              style={[
                styles.text,
                {
                  marginTop: 10,
                  fontSize: 30,
                  fontWeight: '900',
                },
              ]}>
              Create Your Account
            </Text>
            <Text
              style={[
                styles.text,
                {fontSize: 15, fontWeight: '900', color: '#747474'},
              ]}>
            Sign Up and Get Started
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.googleButton}>
                <Image
                  source={require('../assets/google.png')}
                  style={styles.GoogleLogo}
                />

                <Text style={styles.text}>Log in with Google</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
              <Image
                source={require('../assets/facebook.png')}
                style={styles.FacebookLogo}
              />
              <Text style={styles.text}>Log in with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton}>
                <Text style={styles.contact}>Continue with Phone Number</Text>
            </TouchableOpacity>
          </View>
          <InputTextField style={{color:'black'}} title="Name" />
          <InputTextField style={{color:'black'}} title="Email" />
          <InputTextField
            style={{
              marginTop: 32,
              marginBottom: 8,
            }}
            title="Password"
            isSecure={true}
          />
          <TouchableOpacity  style={styles.submitContainer}>
            <Text
              style={[
                styles.text,
                {
                  color: '#FFF',
                  fontWeight: '600',
                  fontSize: 16,
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                color: '#ABB4BD',
                textAlign: 'center',
                marginTop: 24,
              },
            ]}>
            By using this app, you agree to our{' '}
            <Text style={[styles.text, styles.link]}>Term Of Use </Text>
              and
              <Text style={[styles.text, styles.link]}>Privacy Policy. </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ebd9',
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Avenir Next',
    color: '#1D2029',
  },
  contact: {
    fontFamily: 'Avenir Next',
    color: '#000000',
  },
  facebookButton: {
    flexDirection: 'row',
    marginHorizontal: 55,
    // paddingVertical: 10,
    // paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    fontSize: 18,
    borderColor: '#3C569A',
    borderRadius: 0,
    backgroundColor: '#f5ebd9',
    borderWidth: 2,
  },
  contactButton: {
    flexDirection: 'row',
    marginHorizontal: 55,
    marginVertical:10,
    // paddingVertical: 10,
    // paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    fontSize: 18,
    borderColor: '#000000',
    borderRadius: 0,
    backgroundColor: '#f5ebd9',
    borderWidth: 2,
  },
  googleButton: {
    flexDirection: 'row',
    marginHorizontal: 55,
    marginVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    fontSize: 18,
    borderColor: '#4284F3',
    borderRadius: 0,
    backgroundColor: '#f5ebd9',
    borderWidth: 2,
  },
  FacebookLogo: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  GoogleLogo: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginLeft:-20,
  },
  link: {
    color: '#B21F02',
    fontSize: 14,
    fontWeight: '500',
  },
  submitContainer: {
    backgroundColor: '#B21F02',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
});
