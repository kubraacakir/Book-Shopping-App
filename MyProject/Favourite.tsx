import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './Home'
import Search from './Search'
import Fav from './Favourite'
import Cart from './Cart'

const Favourite = ({ navigation }: { navigation: any }) => {
  const Tabs = createBottomTabNavigator()
    return (
    <View>
        <Text style={{fontSize: 20, color: "black", left: 160}}>Favoriler</Text>
        <View style={{top: 672}}>
        <Tabs.Navigator>
          <Tabs.Screen name='Home' component={Home} options={{
            tabBarIcon: () => {
              return (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                      source={require("./png-transparent-encapsulated-postscript-logo-free-home-cdr-angle-text-thumbnail.png")}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }} />
          <Tabs.Screen name='Arama' component={Search} options={{
            tabBarIcon: () => {
              return (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Arama')}>
                    <Image
                      source={require("./3917754.png")}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }} />
          <Tabs.Screen name='Favori' component={Fav} options={{
            tabBarIcon: () => {
              return (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Favoriler')}>
                    <Image
                      source={require("./png-transparent-heart-logo-heart-love-text-heart-thumbnail.png")}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }} />
          <Tabs.Screen name='Sepet' component={Cart} options={{
            tabBarIcon: () => {
              return (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Sepet')}>
                    <Image
                      source={require("./png-clipart-computer-icons-shopping-cart-shopping-cart-cdr-angle.png")}
                      resizeMode="contain"
                      style={{ width: 25 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }} />
        </Tabs.Navigator>
      </View>
    </View>
  )
}
export default Favourite