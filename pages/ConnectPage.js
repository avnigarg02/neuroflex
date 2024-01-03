import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"

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
    // do something
  };

  return (
    <View style={connectStyles.container}>

      <Text style={connectStyles.text}>Hello {name}!</Text>
      
      <TouchableOpacity
        style={buttonStyles.button}
        onPress={connect}
      >
        <Text style={buttonStyles.buttonText}>Connect</Text>
      </TouchableOpacity>


    </View>
  );
}

const connectStyles = StyleSheet.create({
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

export default ConnectPage;