import React from 'react';
import { Image, StyleSheet, Button, View, SafeAreaView } from 'react-native';

//anasayfa

const Separator = () => <View style={styles.separator} />;

const New = ({navigation} : {navigation : any}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Image 
        source={require('./logom.png')}
        style={{ width: 400, height: 400, bottom: 60 }}
        resizeMode="contain" />
    </View>
    <View>
      <Button
        title="Üye Ol"
        onPress={() => navigation.navigate('Uye Ol')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Giriş Yap"
        color="#f194ff"
        onPress={() => navigation.navigate('Oturum Ac')}
      />
    </View>
    <Separator />
  </SafeAreaView>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 12,
    backgroundColor: 'azure'
  },
  separator: {
    marginVertical: 19,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});



export default New;