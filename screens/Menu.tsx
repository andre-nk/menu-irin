/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

const Menu = () => {
  type orderScreenProp = StackNavigationProp<RootStackParamList, 'Order'>;
  const navigation = useNavigation<orderScreenProp>();
  const [nasgor, setNasgor] = useState(0);
  return (
    <ScrollView style={style.safe}>
      <View style={style.view1}>
        <Text style={style.header}>Menu</Text>
      </View>
      <View style={style.view2}>
        <Text style={style.category}>Food</Text>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image
              style={style.img}
              source={require('../images/nasi-goreng-merah.jpg')}
            />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Nasi Goreng</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image
              style={style.img}
              source={require('../images/opor.jpeg.jpg')}
            />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Opor Ayam</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image style={style.img} source={require('../images/geprek.jpg')} />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Ayam Geprek</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.view2}>
        <Text style={style.category}>Snack</Text>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image style={style.img} source={require('../images/klepon.jpg')} />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Klepon</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image
              style={style.img}
              source={require('../images/sosis-solo.jpg')}
            />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Sosis Solo</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image
              style={style.img}
              source={require('../images/mata-kebo.jpg')}
            />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Mata Kebo</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.view2}>
        <Text style={style.category}>Drink</Text>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image
              style={style.img}
              source={require('../images/wedang-uwuh.jpg')}
            />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Wedang Uwuh</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image style={style.img} source={require('../images/cendol.png')} />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Es Cendol</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.view3}>
          <View style={style.viewA}>
            <Image
              style={style.img}
              source={require('../images/espijo.jpg')}
            />
          </View>
          <View style={style.viewB}>
            <View style={style.viewC}>
              <Text style={style.name}>Es Pisang Ijo</Text>
            </View>
            <View style={style.viewD}>
              <Text style={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </View>
          </View>
          <View style={style.viewA}>
            <View style={style.viewA}>
              <Text style={style.center}>10.000</Text>
            </View>
            <View style={style.viewA}>
              <Text style={style.center}>{nasgor}</Text>
            </View>
            <View style={style.plusMinus}>
              <View style={style.split1}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor - 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={style.split2}>
                <TouchableOpacity
                  onPress={() =>
                    setNasgor(nasgor => {
                      return nasgor + 1;
                    })
                  }>
                  <Text style={style.plusMinusButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.footer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('Order')}>
          <Text style={style.buttonText}>CART</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Menu;

const style = StyleSheet.create({
  safe: {
    flex: 1,
  },
  view1: {
    height: 75,
    justifyContent: 'center',
    backgroundColor: '#213E33',
  },
  view2: {
    height: 350,
    marginBottom: 10,
  },
  view3: {
    height: 90,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 25,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    marginBottom: 10,
  },
  viewA: {
    flex: 1,
    justifyContent: 'center',
  },
  viewB: {
    flex: 2,
    backgroundColor: 'white',
  },
  viewC: {
    flex: 3,
  },
  viewD: {
    flex: 7,
  },
  header: {
    color: '#F4F4F4',
    paddingLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  category: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  desc: {
    color: 'black',
    fontSize: 13,
    fontWeight: '400',
  },
  img: {
    height: 65,
    width: 65,
    borderRadius: 10,
  },
  plusMinus: {
    flex: 1,
    backgroundColor: '#F8D854',
    borderRadius: 10,
    flexDirection: 'row',
  },
  split1: {
    flex: 1,
    borderRightWidth: 1,
  },
  split2: {
    flex: 1,
    borderLeftWidth: 1,
  },
  center: {
    alignSelf: 'center',
    fontWeight: '600',
  },
  plusMinusButton: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '900',
  },
  footer: {
    height: 150,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#F8D854',
    width: 330,
    height: 70,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 32,
    alignSelf: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#202020',
  },
});
