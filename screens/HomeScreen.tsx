/* eslint-disable prettier/prettier */
//PAGE 1
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

const HomeScreen = () => {
  type categoriesScreenProp = StackNavigationProp<
    RootStackParamList,
    'Categories'
  >;
  const navigation = useNavigation<categoriesScreenProp>();

  return (
    <SafeAreaView>
      <View>
        <Image style={style.img} source={require('../images/logo.png')} />
      </View>
      <View style={style.view1}>
        <Text style={style.text2}>
          Flavors of Indonesia at Your Fingertips:
        </Text>
        <Text style={style.text3}>Order Now for a Culinary Adventure!</Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.menu}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={style.text1}>MENU</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  img: {
    width: 255,
    height: 190,
    alignSelf: 'center',
    marginTop: 200,
  },
  view1: {
    width: 299,
    height: 38,
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 16,
    color: '#202020',
  },
  text3: {
    fontSize: 16,
    color: '#202020',
  },
  menu: {
    marginTop: 100,
    backgroundColor: '#F8D854',
    width: 265,
    height: 70,
    borderRadius: 20,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 32,
    alignSelf: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#202020',
  },
});
export default HomeScreen;
