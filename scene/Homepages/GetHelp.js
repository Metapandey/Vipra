import React from 'react';
import {StyleSheet, View} from 'react-native';
export default class HelpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderHome} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ebd9',
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
