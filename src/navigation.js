// @ts-nocheck
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import ProductsScreen from './screens/ProductsScreen';
// import ProductDetailsScreen from './screens/ProductDetailsScreen';
// import ShoppingCart from './screens/ShoppingCart';
// import { Pressable, Text } from 'react-native';

// import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// // import { useSelector } from 'react-redux';
// // import { selectNumberOfItems } from './store/cartSlice';
// // import TrackOrder from './screens/TrackOrder';

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   // const numberOfItems = useSelector(selectNumberOfItems);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Products"
//           component={ProductsScreen}
//         />
//                 <Stack.Screen
//           name="Product Details"
//           component={ProductDetailsScreen}
//         />
//                 <Stack.Screen
//           name="Cart"
//           component={ShoppingCart}
//         />
     
//       </Stack.Navigator>
//       {/* <ProductsScreen/> */}
//     </NavigationContainer>
//   );
// };

// export default Navigation;


{/* <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>
                  {/* {numberOfItems} */}
      //           </Text>
      //         </Pressable>
      //       ),
      //       headerLeft: () => (
      //         <MaterialCommunityIcons
      //           onPress={() => navigation.navigate('Track Order')}
      //           name="truck-delivery"
      //           size={22}
      //           color="gray"
      //         />
      //       ),
      //     })}
      //   />
      //   <Stack.Screen
      //     name="Product Details"
      //     component={ProductDetailsScreen}
      //     options={{ presentation: 'modal' }}
      //   />
      //   <Stack.Screen name="Cart" component={ShoppingCart} />
      //   {/* <Stack.Screen name="Track Order" component={TrackOrder} /> */}
      // </Stack.Navigator> */}















//       import * as React from 'react';
// import {  Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (

//     <>
//       <Text style={{color:'black'}}>Home Screen</Text>
//       <Text style={{color:'red'}}>Home Screen</Text>
//       <Text style={{color:'red'}}>Home Screen</Text>

//     </>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}