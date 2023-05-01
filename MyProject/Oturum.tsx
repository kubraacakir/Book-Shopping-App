import React from 'react'
import axios from 'axios'
import { View, Image, TextInput, StyleSheet, ScrollView, Button, Alert } from 'react-native'


//oturum ac

const Oturum = ({navigation} : {navigation : any}) => {
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')

    const getUser = () => {
        axios.get('http://10.0.2.2:1112/api/users/get', {
            params: {
                email: email,
                password : password
            }
        })
            .then(function (response) {
                Alert.alert('Giriş:',"Başarılı")
                
            })
            .then(function (response) {
                navigation.navigate('Profile')
            })
            
            .catch(function (error) {
                console.log(error);
            })   
    }


    return (
        <ScrollView contentContainerStyle={styles2.container} automaticallyAdjustKeyboardInsets={true}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('./logom.png')}
                    style={{ width: 400, height: 400, left: 1, top: 40, bottom: 20, flex: 1 }}
                    resizeMode="contain"
                />
            </View>

            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder='Email'
                placeholderTextColor='gray'
                autoCapitalize='words'
                maxLength={30}
                cursorColor='black'
                inputMode='email'
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder='Şifre'
                placeholderTextColor='gray'
                autoCapitalize='words'
                maxLength={20}
                cursorColor='black'
            />
            <View style={{ height: 32, width: 100, left: 290, top: 80, flex: 1 }}>
                <Button
                    title='Giriş Yap'
                    onPress={getUser}
                    color='#f194ff'
                    
                />
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    input: {
        borderColor: '#bbb',
        backgroundColor: 'white',
        height: 35,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        width: 380,
        top: '10%',
        borderRadius: 5

    }
})

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 2,
        backgroundColor: 'azure'
    },
});
export default Oturum