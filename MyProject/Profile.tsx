import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Text, StatusBar, FlatList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home'
import Search from './Search'
import Fav from './Favourite'
import Cart from './Cart'

//profil
const Profile = ({ navigation }: { navigation: any }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Polisiye Romanlar', value: 'polisiye' },
        { label: 'Tarih Kitapları', value: 'tarih' },
        { label: 'Aşk Romanları', value: 'ask' },
        { label: 'Kurgu Romanlar', value: 'kurgu' },
        { label: 'Aksiyon ve Macera', value: 'aksiyon' },
        { label: 'Çocuk Kitapları', value: 'cocuk' },
        { label: 'Psikoloji Kitapları', value: 'psikoloji' },
        { label: 'Felsefe Kitapları', value: 'felsefe' },
        { label: 'Bilim Kurgu ve Fantastik', value: 'fantastik' },
        { label: 'Dünya Edebiyatı', value: 'dünya' },
        { label: 'Din ve Maneviyat', value: 'din' },
        { label: 'Klasikler', value: 'klasik' }
    ]);
    
    const Tabs = createBottomTabNavigator()
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('./logom.png')}
                    style={{ width: 110, height: 90, left: 185, bottom: 78 }}
                    resizeMode="contain" />
            </View>
            <View style={{ flex: 1 }}>
                <DropDownPicker
                    open={open}
                    placeholder={'KATEGORİLER'}
                    placeholderStyle={{ fontSize: 13, color: 'white' }}
                    value={value}
                    items={items}
                    onPress={() => navigation.navigate('Urun')}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{ height: 60, width: 140, bottom: 115, backgroundColor: 'royalblue' }}
                    textStyle={{ fontSize: 16, fontWeight: 'bold' }}
                    labelStyle={{ fontWeight: 'bold' }}
                    searchable={true}
                    listMode='MODAL'
                    scrollViewProps={{ nestedScrollEnabled: true }}
                    
                />
                 <FlatList 
                    data={items}
                    renderItem={({item})=>( <Text>{item.label}</Text>) }
                />
            
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Oturum Ac')}>
                    <Image
                    
                        source={{ uri: 'https://assets.materialup.com/uploads/b6c33467-82c3-442c-a2dc-c089bbff9fa1/preview.png' }}
                        style={{ width: 80, height: 58, left: 348, bottom: 167 }}
                        resizeMode="stretch" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'royalblue', bottom: 161 }} />

            </View>
            <View style={{ flex: 1, backgroundColor: 'lavender' }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/500x400-0/originals/0001784234001-1.jpg' }}
                        style={{ width: 120, height: 100, bottom: 115, left: 6 }}
                        resizeMode='contain'
                    />
                    <Text style={{ bottom: 110, left: 39, fontWeight: 'bold', color: 'black' }}>Polisiye</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/500x400-0/originals/0001740229001-1.jpg' }}
                        style={{ width: 120, height: 100, bottom: 168, left: 145 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 163, left: 185, fontWeight: 'bold', color: 'black' }}>Tarih</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000052566-1.jpg' }}
                        style={{ width: 170, height: 100, bottom: 220, left: 260 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 217, left: 330, fontWeight: 'bold', color: 'black' }}>Aşk</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000411059-1.jpg' }}
                        style={{ width: 170, height: 100, bottom: 92, left: -20 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 88, left: 44, fontWeight: 'bold', color: 'black' }}>Kurgu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000371032-1.jpg' }}
                        style={{ width: 170, height: 100, bottom: 145, left: 120 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 141, left: 182, fontWeight: 'bold', color: 'black' }}>Macera</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000628979-1.jpg' }}
                        style={{ width: 170, height: 100, bottom: 199, left: 260 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 192, left: 322, fontWeight: 'bold', color: 'black' }}>Çocuk</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/500x400-0/originals/0001696702001-1.jpg' }}
                        style={{ width: 170, height: 100, bottom: 70, left: -14 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 65, left: 46, fontWeight: 'bold', color: 'black' }}>Psikoloji</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/500x400-0/originals/0001901960001-1.jpg' }}
                        style={{ width: 170, height: 100, bottom: 124, left: 120 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 118, left: 185, fontWeight: 'bold', color: 'black' }}>Felsefe</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg' }}
                        style={{ width: 170, height: 100, bottom: 175, left: 260 }}
                        resizeMode='center'
                    />
                    <Text style={{ bottom: 171.8, left: 315, fontWeight: 'bold', color: 'black' }}>Fantastik</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'lavender', flex: 1 }}>
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
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        justifyContent: 'center',
        backgroundColor: 'lavender'
    },
});

export default Profile