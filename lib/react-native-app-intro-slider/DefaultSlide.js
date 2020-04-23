import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';

export default class DefaultSlide extends React.PureComponent {
  render() {
    const { item, dimensions, bottomButton } = this.props;
    const style = {
      flex: 1,
      backgroundColor: item.backgroundColor,
      width: dimensions.width,
      paddingBottom: bottomButton ? 132 : 64,
    };
    return (
      <View style={[styles.mainContent, style]}>
        <Image source={item.image} style={item.imageStyle} />
        <Text style={[styles.title, item.titleStyle]}>{item.title}</Text>
        <Text style={[styles.text, item.textStyle]}>{item.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, .7)',
    fontSize: 16,
    textAlign: 'justify',
    // fontWeight: '300',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: 'rgba(227, 56, 13, 1)',
    // fontWeight: '300'
    paddingHorizontal: 16,
  },
});
