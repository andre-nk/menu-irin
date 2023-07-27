/* eslint-disable prettier/prettier */
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

export default function App() {
  type menuScreenProp = StackNavigationProp<RootStackParamList, 'Menu'>;
  const navigation = useNavigation<menuScreenProp>();

  return (
    <SafeAreaView style={style.safe}>
      <View style={style.view1a}>
        <View style={style.view1b}>
          <View style={style.view1c}>
            <Text style={style.texthello}>Hello, </Text>
            <Text style={style.textbarbie}>Barbie!</Text>
          </View>
          <Text style={style.textwhat}>What do you want to eat?</Text>
        </View>
        <Image style={style.propic} source={require('../images/barbie.png')} />
      </View>

      <View style={style.line} />

      <View>
        <Text style={style.textcat}>Categories</Text>
        <TouchableOpacity
          style={style.bfood}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={style.textfood}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.bfood}
          onPress={() => navigation.navigate('Order')}>
          <Text style={style.textfood}>Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.bfood}
          onPress={() => navigation.navigate('Order')}>
          <Text style={style.textfood}>Drink</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safe: {
    flex: 1,
  },
  line: {
    marginTop: 20,
    height: 2,
    backgroundColor: '#202020',
  },
  view1a: {
    flexDirection: 'row',
    paddingLeft: 28,
    paddingTop: 76,
  },
  view1b: {
    flexDirection: 'column',
  },
  view1c: {
    flexDirection: 'row',
  },
  bfood: {
    marginTop: 20,
    backgroundColor: '#F8D854',
    width: 306,
    height: 120,
    borderRadius: 20,
    alignSelf: 'center',
  },
  texthello: {
    fontSize: 24,
    color: '#202020',
  },
  textbarbie: {
    fontSize: 24,
    color: '#202020',
    fontWeight: 'bold',
  },
  textwhat: {
    fontSize: 16,
    color: '#202020',
  },
  textcat: {
    fontSize: 20,
    color: '#202020',
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 28,
  },
  textfood: {
    fontSize: 22,
    color: '#202020',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 48,
  },
  propic: {
    flexDirection: 'row',
    width: 85,
    height: 85,
    marginLeft: 70,
  },
});
