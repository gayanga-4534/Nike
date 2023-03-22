// @ts-nocheck
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import Navigation from './src/navigation';
// import { Provider } from 'react-redux';
// import { store } from './src/store';
// import { StripeProvider } from '@stripe/stripe-react-native';

// const STRIPE_KEY =
//   'pk_test_51MhWh3KFBbgW0VClMkCwptwPtXFBm3F8cYTSTy2FfORjqlbmDnVChl6VTevEm5wGLpCkirGN4GmJT4TShFrqO8KD00zH60RQoD';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <StripeProvider publishableKey={STRIPE_KEY}>
//         <Navigation />
//       </StripeProvider>

//       <StatusBar style="auto" />
//     </Provider>
//   );
// }



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, Text } from 'react-native';
// import Navigation from './src/navigation';
// import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
// import ProductsScreen from './src/screens/ProductsScreen';
// import ShoppingCart from './src/screens/ShoppingCart';
// // import Navigation from './src/navigation';
// // import { Provider } from 'react-redux';
// // import { store } from './src/store';
// // import { StripeProvider } from '@stripe/stripe-react-native';

// // const STRIPE_KEY =
// //   'pk_test_51MhWh3KFBbgW0VClMkCwptwPtXFBm3F8cYTSTy2FfORjqlbmDnVChl6VTevEm5wGLpCkirGN4GmJT4TShFrqO8KD00zH60RQoD';

// export default function App() {
//   return (

//     <View>
//       {/* <ProductsScreen /> */}
//       {/* <ProductDetailsScreen /> */}
//       {/* <ShoppingCart/> */}
//       <Navigation/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }



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


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsScreen from './src/screens/ProductsScreen'
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';
import { Pressable, Text } from 'react-native';

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { useSelector } from 'react-redux';
// import { selectNumberOfItems } from './store/cartSlice';
// import TrackOrder from './screens/TrackOrder';

const Stack = createNativeStackNavigator();

const App = () => {
  // const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator> 
      <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation})=>({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>
                  {/* {numberOfItems} */}
              </Text>
               </Pressable>
          ),
     
         
      })}
      />
             <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: 'modal' }}
        /> 
                 <Stack.Screen
          name="Cart"
          component={ShoppingCart}
        /> 
     
     </Stack.Navigator>
      {/* <ProductsScreen/> */}
    </NavigationContainer>
  );
};

export default App;