import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PurohitScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderHome}>
          <Text style={styles.textMyProfile}>Book Pandit</Text>
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
  HeaderHome: {
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
