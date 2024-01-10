import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './pages/HomePage';
import LoginPage from'./pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ConnectPage from './pages/ConnectPage';
import ResultsPage from './pages/ResultsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage}  /> 
          <Stack.Screen name="Home" component={HomePage} options={{title:"Home"}} />
          <Stack.Screen name="Signup" component={SignupPage} options={{title:"Signup"}} />
          <Stack.Screen name="Connect" component={ConnectPage} options={{title:"Connect"}} />
          <Stack.Screen name="Results" component={ResultsPage} options={{title:"Results"}} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}