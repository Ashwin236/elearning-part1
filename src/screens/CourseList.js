import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default class CourseList extends React.Component {
  render() {
    const { img, title, bg, onPress ,fd,w} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: fd,
          backgroundColor: bg,
          padding: 10,

          marginHorizontal: 10,
          borderRadius: 20,
          alignItems: 'center',
          marginTop: 10,
          width: w,
        }}>
        <View style={{backgroundColor:bg,width:100,height:100}}>
          <Image source={img} style={{ width: "100%", height: "100%" }} />
        </View>
        <View>
          <Text
            style={{
              color: '#345c74',
              fontFamily: 'Bold',
              fontSize: 13,
              paddingHorizontal: 20,
              width: 170,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: '#f58084',
              fontFamily: 'Medium',
              fontSize: 12,
              paddingHorizontal: 20,
            }}>
            10 hours, 19 lessons
          </Text>
        </View>
        <Text
          style={{
            color: '#345c74',
            fontFamily: 'Medium',
            fontSize: 13,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          25%
        </Text>
        <ProgressCircle
          percent={30}
          radius={17}
          borderWidth={1.5}
          color="f580084"
          shadowColor="#FFF"
          bgColor="#FFF">
          <Image source={require('../images/pl.png')} />
        </ProgressCircle>
      </TouchableOpacity>
    );
  }
}
