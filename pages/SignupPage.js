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
import { ref, set } from "firebase/database";
import database from '../config/FirebaseDB';
import styles from './styles';

const SignupPage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const db = database;
        set(ref(db, 'users/' + username + '/'), {
            name: name,
            email: email,
            password: password
        });
        navigation.navigate('Login')
    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inner}
                >
                    <Text style={styles.text}>
                        Sign up
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        placeholderTextColor="#082D0F"
                        onChangeText={setName}
                        value={name}
                    />
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
                        placeholder='Email'
                        placeholderTextColor="#082D0F"
                        onChangeText={setEmail}
                        value={email}
                        autoCapitalize='none'
                        keyboardType='email-address'
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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>



                </KeyboardAvoidingView>

            </View>
        </TouchableWithoutFeedback>

    );
}

// const loginStyles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFC0CB',
//     },
//     inner: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     loginText: {
//         fontSize: 30,
//         color: 'gray',
//         textAlign: 'center',
//         paddingBottom: 20
//     },
//     input: {
//         width: 200,
//         height: 44,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: 'black',
//         marginBottom: 10,
//     },
// });

export default SignupPage;