import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './navigation/TabNavigator';
import EmployerTabNavigator from './navigation/EmployerTabNavigator';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterEmployeeScreen from './screens/RegisterEmployeeScreen';
import RegisterEmployerScreen from './screens/RegisterEmployerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegisterEmployee" component={RegisterEmployeeScreen} />
        <Stack.Screen name="RegisterEmployer" component={RegisterEmployerScreen} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="EmployerHome" component={EmployerTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}