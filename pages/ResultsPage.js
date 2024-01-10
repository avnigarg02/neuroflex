import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"


const ResultsPage = ({ navigation }) => {

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
    <View style={resultStyles.container}>

      <Text style={resultStyles.text}>{name}'s results:</Text>
      
      <Text style={resultStyles.text}>maybe add a picture here or something to show results</Text>


    </View>
  );
}

const resultStyles = StyleSheet.create({
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

export default ResultsPage;