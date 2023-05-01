import axios from 'axios'
import React, { useState } from 'react'
import { View, Image, TextInput, StyleSheet, ScrollView, Button } from 'react-native'

//uye ol

const Details = () => {
    const [name, onChangeName] = React.useState('')
    const [surname, onChangeSurname] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')

    const saveUser = () => {
        axios.post(`http://10.0.2.2:1112/api/users/save`, {
            name: name,
            surname: surname,
            email: email,
            password: password
        })
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
            .catch(error => console.log(error));
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
                onChangeText={onChangeName}
                value={name}
                placeholder='Ad'
                placeholderTextColor='gray'
                autoCapitalize='words'
                maxLength={20}
                cursorColor='black'

            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeSurname}
                value={surname}
                placeholder='Soyad'
                placeholderTextColor='gray'
                autoCapitalize='words'
                maxLength={20}
                cursorColor='black'
            />
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
            <View style={{ height: 32, width: 80, left: 307, top: 80, flex: 1 }}>
                <Button
                    title='Kayıt Ol'
                    onPress={saveUser}
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
export default Details