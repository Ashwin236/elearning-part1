import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CourseList from '../screens/CourseList';

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/Home2.png')}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <View
            style={{
              marginTop: 100,
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 12,
                borderRadius: 10,
                marginTop: 30,
                backgroundColor: '#d1a0a7',
              }}>
              <Image
                source={require('../images/hum.png')}
                style={{ height: 15, width: 20 }}
              />
            </View>
          </View>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 35,
              paddingTop: 40,
              fontFamily: 'Bold',
              color: '#0f0a5e',
            }}>
            Welcome back Divya Vala
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFF',
              padding: 10,
              borderRadius: 12,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <TextInput
              placeholder="Search for new knowledge!"
              placeholderTextColor="#345c74"
              style={{
                fontFamily: 'Bold',
                fontSize: 12,
                width: 280,
                paddingHorizontal: 12,
              }}
            />
            <Image
              source={require('../images/sear.png')}
              style={{ height: 14, width: 14 }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#f0d0f5',
              marginTop: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              paddingVertical: 25,
              paddingLeft: 30,
            }}>
            <View>
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  fontFamily: 'Bold',
                  width: 300,
                }}>
                Improve your life through learning
              </Text>
              
            </View>
            
          </View>
         <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cources')}
            style={{
              flexDirection: 'row',
              backgroundColor: '#f58084',
              alignItems: 'center',
              justifyContent:"center",
              marginLeft:120,
              marginTop:20,
              width: 150,
              paddingVertical: 10,
              borderRadius: 14,
              paddingHorizontal: 10
            }}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Bold',
                fontSize: 12,
              }}>
              Check all Categories
            </Text>
            <Image
              source={require('../images/a3.png')}
              style={{ marginLeft: 20, width: 8, height: 8 }}
            />
          </TouchableOpacity>
          <View
            style={{
              borderBottomEndRadius: 15,

              width: '60%',
              height: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#345c74',
                fontWeight: 'bold',
                fontSize: 20,
                paddingHorizontal: 20,

                marginBottom: 5,

                padding: 5,
                width: '85%',
              }}>
              Continue Learning...
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <CourseList
            fd="column"
              img={require('../images/js.png')}
              title="Modern JavaScript From The Beginning"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../images/html.png')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../images/rn.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../images/js.png')}
              title="Modern JavaScript From The Beginning"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../images/html.png')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../images/rn.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../images/js.png')}
              title="Modern JavaScript From The Beginning"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../images/html.png')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../images/rn.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
          </ScrollView>
          <View
            style={{
              borderBottomEndRadius: 15,

              width: '90%',
              height: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#345c74',
                fontWeight: 'bold',
                fontSize: 20,
                paddingHorizontal: 20,

                marginBottom: 5,

                padding: 5,
                width: '85%',
              }}>
              Featured Courses in React Native
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <CourseList
             fd="column"
              img={require('../images/react5.png')}
              title="Modern JavaScript From The Beginning"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../images/react2.png')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../images/react3.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../images/react4.png')}
              title="Modern JavaScript From The Beginning"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../images/react1.jpg')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../images/react6.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../images/js.png')}
              title="Modern JavaScript From The Beginning"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../images/html.png')}
              title="Build Websites from Scratch with HTML & CSS"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../images/rn.png')}
              title="React Native: Advanced Concepts"
              bg="#fcf2ff"
            />
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    );
  }
}
