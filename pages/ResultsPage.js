import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../components/Button';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import { useRoute } from "@react-navigation/native"
import styles from './styles';

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
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>{name}'s results:</Text>
        <Text style={styles.smallText}>Mean Amplitude: </Text>
        <Text style={styles.resultText}>0.662</Text>
        <Text style={styles.smallText}>Standard Deviation: </Text>
        <Text style={styles.resultText}>0.073</Text>
        <Text style={styles.smallText}>Likelihood of ALS</Text>
        <Text style={styles.resultText}>13%</Text>
        <Text style={styles.smallText}>Please note that this not a guarentee or diagnosis of ALS. Check with a medical professional if your likelihood is high.</Text>

      </View>
    </View>
  );
}

export default ResultsPage;