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
import { ref, onValue } from "firebase/database";
import database from '../config/FirebaseDB';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        onValue(ref(database, 'users/'), (snapshot) => {
            if (snapshot.val()?.[username]?.password === password) {
                navigation.navigate('Home', { username: username })
            } else {
                setError('Please enter a valid username and password combination.')
            }
        });
    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={loginStyles.container}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={loginStyles.inner}
                >
                    <Text style={loginStyles.loginText}>
                        Login
                    </Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Username'
                        onChangeText={setUsername}
                        value={username}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Password'
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                    <Text style={loginStyles.errorText}>{error}</Text>
                    <Button
                        title="Login"
                        onPress={handleLogin}
                    />
                    <Button
                        title="Sign up"
                        onPress={() => navigation.navigate('Signup')}
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
    errorText: {
        fontSize: 15,
        color: 'purple',
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

export default LoginPage;