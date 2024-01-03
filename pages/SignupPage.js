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
    Button
} from 'react-native';
import { ref, set } from "firebase/database";
import database from '../config/FirebaseDB';

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
            <View style={loginStyles.container}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={loginStyles.inner}
                >
                    <Text style={loginStyles.loginText}>
                        Sign up
                    </Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Name'
                        onChangeText={setName}
                        value={name}
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Username'
                        onChangeText={setUsername}
                        value={username}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Email'
                        onChangeText={setEmail}
                        value={email}
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Password'
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    <Button
                        title="Submit"
                        onPress={handleSubmit}
                    />



                </KeyboardAvoidingView>

            </View>
        </TouchableWithoutFeedback>

    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC0CB',
    },
    inner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    footerContainer: {
        backgroundColor: '#FFC0CB'
    },
    loginText: {
        fontSize: 30,
        color: 'gray',
        textAlign: 'center',
        paddingBottom: 20
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});

export default SignupPage;