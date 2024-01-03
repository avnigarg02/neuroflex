import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConnectPage from './pages/ConnectPage';
import LoginPage from'./pages/LoginPage';
import SignupPage from './pages/SignupPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage}  /> 
          <Stack.Screen name="Home" component={ConnectPage} options={{title:""}} />
          <Stack.Screen name="Signup" component={SignupPage} options={{title:"Signup"}} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}