import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './navigation/TabNavigator';
<<<<<<< HEAD
import SplashScreen from './screens/SplashScreen';
import LoginEmployeeScreen from './screens/LoginEmployeeScreen';
import LoginEmployerScreen from './screens/LoginEmployerScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterEmployeeScreen from './screens/RegisterEmployeeScreen';
import RegisterEmployerScreen from './screens/RegisterEmployerScreen';
import AuthSelectionScreen from './screens/AuthSelectionScreen';
import EmployerTabNavigator from './navigation/EmployerTabNavigator';
=======
import EmployerTabNavigator from './navigation/EmployerTabNavigator';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterEmployeeScreen from './screens/RegisterEmployeeScreen';
import RegisterEmployerScreen from './screens/RegisterEmployerScreen';
>>>>>>> hoon

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="AuthSelection">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AuthSelection" component={AuthSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginEmployee" component={LoginEmployeeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginEmployer" component={LoginEmployerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterEmployee" component={RegisterEmployeeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterEmployer" component={RegisterEmployerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="EmployerMain" component={EmployerTabNavigator} options={{ headerShown: false }} />
=======
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegisterEmployee" component={RegisterEmployeeScreen} />
        <Stack.Screen name="RegisterEmployer" component={RegisterEmployerScreen} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="EmployerHome" component={EmployerTabNavigator} options={{ headerShown: false }} />
>>>>>>> hoon
      </Stack.Navigator>
    </NavigationContainer>
  );
}