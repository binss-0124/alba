
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EmployerHomeScreen from '../screens/EmployerHomeScreen';
import EmployerDashboardScreen from '../screens/EmployerDashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EmployerCalendarScreen from '../screens/EmployerCalendarScreen';

const Tab = createBottomTabNavigator();

const EmployerTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '대시보드') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === '캘린더') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === '프로필') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="홈" component={EmployerHomeScreen} />
      <Tab.Screen name="대시보드" component={EmployerDashboardScreen} />
      <Tab.Screen name="캘린더" component={EmployerCalendarScreen} />
      <Tab.Screen name="프로필" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default EmployerTabNavigator;
