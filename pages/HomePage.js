import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"

// import {BleManager} from 'react-native-ble-plx'
// const _BleManager = new BleManager();

const HomePage = ({ navigation }) => {

  const route = useRoute()
  const username = route.params?.username

  const [name, setName] = useState('');

  useEffect(() => {
    const db = database;
    onValue(ref(db, 'users/' + username + '/'), (snapshot) => {
      setName(snapshot.val()?.name)
    });
  }, [name]);

  return (
    <View style={homeStyles.container}>

      <Text style={homeStyles.text}>Hello {name}!</Text>
      
      <TouchableOpacity
        style={buttonStyles.button}
        onPress={() => navigation.navigate('Connect', { username: username })}
      >
        <Text style={buttonStyles.buttonText}>Connect</Text>
      </TouchableOpacity>


    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 20,
    fontSize: 24,
    color: 'gray',
    textAlign: 'center',
  },
});

export default HomePage;