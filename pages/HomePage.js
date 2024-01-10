import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"
import styles from "./styles";

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
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>Hello {name}!</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Connect', { username: username })}
        >
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomePage;