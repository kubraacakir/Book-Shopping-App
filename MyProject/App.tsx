import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import HomeScreen from './New'
import SignUpScreen from './Details'
import OturumScreen from './Oturum'
import ProfileScreen from './Profile'
import HomePage from './Home'
import Search from './Search';
import Fav from './Favourite'
import Cart from './Cart';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Uye Ol"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Oturum Ac"
          component={OturumScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Ana Sayfa"
          component={HomePage}
        />
        <Stack.Screen
          name="Arama"
          component={Search}
        />
        <Stack.Screen
          name="Favoriler"
          component={Fav}
        />
        <Stack.Screen 
        name="Sepet"
        component={Cart}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;