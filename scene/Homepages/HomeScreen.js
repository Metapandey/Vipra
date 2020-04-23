/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import pan from '/home/ayushpandey/Documents/Vipra/Image/pandit.jpg';
import {SliderBox} from 'react-native-image-slider-box';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        require('/home/ayushpandey/Documents/Vipra/Image/Slider1.jpg'),
        require('/home/ayushpandey/Documents/Vipra/Image/slider2.jpg'),
        require('/home/ayushpandey/Documents/Vipra/Image/slider3.jpg'),
        require('/home/ayushpandey/Documents/Vipra/Image/slider4.jpg'),
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderHome}>
          <Animatable.View
            // duration=00}
            animation="slideInRight"
            style={{
              marginTop: 40,
              height: '50%',
              // width: '90%',
              backgroundColor: '#f5ebd9',
              borderWidth: 1,
              borderColor: '#483928',
              // justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 10,
              color: '#483928',
            }}>
            <Icon name="search" style={{fontSize: 15, color: '#483928'}} />
            <TextInput
              placeholder="Search By Name"
              placeholderTextColor="#483928"
              style={{fontSize: 15, marginLeft: 10}}
            />
          </Animatable.View>
        </View>
        <View style={styles.ViewbelowHeader}>
          <ImageBackground source={pan} style={styles.ImageHome}>
            <Text style={styles.ImageText}>
              Want to talk to a pandit right now ?
            </Text>
            <Text style={styles.ImageText2}>Start at ₹ 99</Text>
            <TouchableOpacity style={styles.Callme}>
              <Text
                style={{
                  // marginEnd:'30%',
                  marginBottom: '12%',
                  fontWeight: '600',
                  fontSize: 20,
                  color: '#483928',
                }}>
                Call Now
              </Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.Slider}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={175}
              // sliderBoxWeight={15}
              // parentWidth={150}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={5}
              autoplay={true}
              circleLoop
            />
          </View>
          <View style={styles.HomebuttonsView1}>
            <TouchableOpacity style={styles.Homebuttons1}>
              <Text style={styles.textStyle}>Satyanarayan Puja</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Homebuttons1}>
              <Text style={styles.textStyle}>Griha Pravesh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Homebuttons1}>
              <Text style={styles.textStyle}>Vivah</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.HomebuttonsView2}>
            <TouchableOpacity style={styles.Homebuttons2}>
              <Text style={styles.textStyle}>Saraswati Puja</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Homebuttons2}>
              <Text style={styles.textStyle}>Jnaeu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Homebuttons2}>
              <Text style={styles.textStyle}>Shrad</Text>
            </TouchableOpacity>
          </View>
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
  ViewbelowHeader: {
    flex: 1,
  },

  Slider: {
    // flex: 1,
    marginTop: '-35.3%',
    marginBottom: '0.5%',
    // backgroundColor: '#f5ebd9',
  },
  HomebuttonsView1: {
    flex: 1,
    // marginTop: '5%',
    flexDirection: 'row',
  },
  HomebuttonsView2: {
    flex: 1,
    // marginTop: '-5%',
    flexDirection: 'row',
  },
  Homebuttons1: {
    borderWidth: 0.8,
    borderColor: '#ece4d6',
    width: '33.3%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  Homebuttons2: {
    borderWidth: 0.8,
    borderColor: '#ece4d6',
    width: '33.3%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  Callme: {
    width: '40%',
    height: '12%',
    borderWidth: 1,
    borderColor: '#483928',
    backgroundColor: '#f5ebd9',
    // borderRadius: 4,
    paddingVertical: 12,
    marginTop: '29%',
    marginLeft: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ImageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute', // child
    marginTop: '5%',
    left: 20,
    marginEnd: 20,
  },
  ImageText2: {
    fontSize: 12,
    fontWeight: '900',
    color: 'white',
    position: 'absolute', // child
    marginTop: '28%',
    left: 20,
    marginEnd: '87%',
  },
  ImageHome: {
    width: '100%',
    height: '53%',
    position: 'relative',
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
