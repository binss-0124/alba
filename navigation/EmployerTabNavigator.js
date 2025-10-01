import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EmployerHomeScreen from '../screens/EmployerHomeScreen';
import SalaryManagementScreen from '../screens/SalaryManagementScreen';
import ManagementScreen from '../screens/ManagementScreen';

const Tab = createBottomTabNavigator();

const EmployerTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '급여 관리') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === '관리') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#D1C4E9',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="홈" component={EmployerHomeScreen} />
      <Tab.Screen name="급여 관리" component={SalaryManagementScreen} />
      <Tab.Screen name="관리" component={ManagementScreen} />
    </Tab.Navigator>
  );
};

export default EmployerTabNavigator;
