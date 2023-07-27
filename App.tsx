import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import Categories from './screens/Categories';
import Menu from './screens/Menu';
import Order from './screens/Order';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  Menu: undefined;
  Order: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//PAGE 2
// import React from "react";
// import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View style = {styles.view1}>
//         <Text style = {styles.text1}>
//           Cart
//         </Text>
//       </View>
//       <View style = {styles.view2}>
//         <Text style = {styles.text2}>
//           Food 1
//         </Text>
//         <Text style = {styles.text3}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit
//         </Text>
//       </View>
//       <View>
//         <TouchableOpacity style = {styles.order}>
//           <Text style = {styles.ordered}>ORDER</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   view1: {
//     width: "100%",
//     height: 78,
//     backgroundColor: "#213E33"
//   },
//   view2: {
//     width: 265,
//     height: 80,
//     borderWidth: 2,
//     marginTop: 80,
//     alignSelf: "center",
//     borderRadius: 20
//   },
//   text1: {
//     fontSize: 32,
//     color: "#F4F4F4",
//     marginTop: 15,
//     marginLeft: 15
//   },
//   text2: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#202020",
//     marginLeft: 80,
//     marginTop: 3
//   },
//   text3: {
//     fontSize: 12,
//     color: "#202020",
//     width: 130,
//     height: 50,
//     marginLeft: 80
//   },
//   order: {
//     marginTop: 325,
//     backgroundColor: "#F8D854",
//     width: 265,
//     height: 70,
//     borderRadius: 20,
//     alignSelf: "center",
//   },
//   ordered: {
//     fontSize: 32,
//     alignSelf: "center",
//     margin: 10,
//     fontWeight: "bold",
//     color: "#202020"
//   }
// });

// export default App;
