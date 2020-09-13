import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Modalize } from 'react-native-modalize';

import CourseList from '../screens/CourseList';

export default class Cources extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/bg1.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: '#8bbcdb',
            }}>
            <Image
              source={require('../images/a1.png')}
              style={{ width: 20, height: 15 }}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: '#8bbcdb',
              marginLeft: 240,
            }}>
            <Image
              source={require('../images/hum.png')}
              style={{ height: 15, width: 20 }}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#FFF',
            fontSize: 35,
            fontFamily: 'Bold',
            width: 200,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: 34,
          }}>
          App Development Cources
        </Text>

        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: '#e9e9e9',
            width: 80,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
          alwaysOpen={600}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}>
          <View style={{ marginTop: 40 }}>
            
            <CourseList
             fd="row"
             w="350"
              img={require('../images/js.png')}
              title="Modern JavaScript From The Beginning"
              bg="#fdddf3"
            />
            <CourseList
            fd="row"
             w="350"
              img={require('../images/html.png')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
            fd="row"
             w="350"
              img={require('../images/rn.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
             <CourseList
             fd="row"
              w="350"
              img={require('../images/ds.png')}
              title="Python for Data Science and Machine Learning"
              bg="#fdddf3"
            />
            <CourseList
            fd="row"
             w="350"
              img={require('../images/react5.png')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
            fd="row"
             w="350"
              img={require('../images/react2.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
          </View>
        </Modalize>
      </ImageBackground>
    );
  }
}
