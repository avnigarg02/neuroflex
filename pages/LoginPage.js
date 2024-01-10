import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';
import styles from "./styles"

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        onValue(ref(database, 'users/'), (snapshot) => {
            if (snapshot.val()?.[username]?.password === password) {
                navigation.navigate('Home', { username: username })
                setError('')
            } else {
                setError('Please enter a valid username and password combination.')
            }
        });
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inner}
                >
                    <Text style={styles.text}>
                        Login
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor="#082D0F"
                        onChangeText={setUsername}
                        value={username}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor="#082D0F"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default LoginPage;