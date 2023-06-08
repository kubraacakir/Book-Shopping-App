import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home'
import Searc from './Search'
import Fav from './Favourite'
import Cart from './Cart'

const Search = ({ navigation }: { navigation: any }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Cinayet Alfabesi', value: 'polisiye' },
    { label: 'On Küçük Zenci', value: 'tarih' },
    { label: 'Doğu Ekspresinde Cinayet', value: 'ask' },
    { label: 'Son Evdeki Tehlike', value: 'kurgu' },
    { label: 'Noelde Cinayet', value: 'aksiyon' },
    { label: 'Ölüm Sessiz Geldi', value: 'cocuk' },
    { label: 'Esrarengiz Sanık', value: 'psikoloji' },

  ]);
  const Tabs = createBottomTabNavigator()
  return (
    <View>
      <DropDownPicker
        open={open}
        placeholder={'Ürün Ara'}
        placeholderStyle={{ fontSize: 13, color: 'black' }}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{ backgroundColor: 'white' }}
        textStyle={{ fontSize: 16, fontWeight: 'bold' }}
        labelStyle={{ fontWeight: 'bold' }}
        searchable={true}
        listMode='MODAL'
        scrollViewProps={{ nestedScrollEnabled: true }}

      />
      <View style={{top: 650}}>
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

export default Search
