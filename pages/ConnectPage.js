import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity , Image } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"
import styles from './styles';
import myImage from '../assets/em.png';
const ConnectPage = ({ navigation }) => {

  const route = useRoute()
  const username = route.params?.username

  const [name, setName] = useState('');

  useEffect(() => {
    const db = database;
    onValue(ref(db, 'users/' + username + '/'), (snapshot) => {
      setName(snapshot.val()?.name)
    });
  }, [name]);

  const connect = () => {
    navigation.navigate('Results', { username: username })
  };



  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>Currently Recording EMG Data</Text>

        <Image source={myImage} style={styles.image}></Image>
        <TouchableOpacity
          style={styles.button}
          onPress={connect}
        >
          <Text style={styles.buttonText}>View Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const connectStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFC0CB',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     padding: 20,
//     fontSize: 24,
//     color: 'gray',
//     textAlign: 'center',
//   },
// });

export default ConnectPage;