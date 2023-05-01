import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import HomeScreen from './New'
import SignUpScreen from './Details'
import OturumScreen from './Oturum'
import ProfileScreen from './Profile'

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

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;