<<<<<<< HEAD
=======

>>>>>>> hoon
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EmployerHomeScreen from '../screens/EmployerHomeScreen';
<<<<<<< HEAD
import SalaryManagementScreen from '../screens/SalaryManagementScreen';
import ManagementScreen from '../screens/ManagementScreen';
=======
import EmployerDashboardScreen from '../screens/EmployerDashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EmployerCalendarScreen from '../screens/EmployerCalendarScreen';
>>>>>>> hoon

const Tab = createBottomTabNavigator();

const EmployerTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
<<<<<<< HEAD
          } else if (route.name === '급여 관리') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === '관리') {
            iconName = focused ? 'people' : 'people-outline';
=======
          } else if (route.name === '대시보드') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === '캘린더') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === '사장님') {
            iconName = focused ? 'person' : 'person-outline';
>>>>>>> hoon
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
<<<<<<< HEAD
        tabBarActiveTintColor: '#D1C4E9',
=======
        tabBarActiveTintColor: '#4A90E2',
>>>>>>> hoon
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="홈" component={EmployerHomeScreen} />
<<<<<<< HEAD
      <Tab.Screen name="급여 관리" component={SalaryManagementScreen} />
      <Tab.Screen name="관리" component={ManagementScreen} />
=======
      <Tab.Screen name="대시보드" component={EmployerDashboardScreen} />
      <Tab.Screen name="캘린더" component={EmployerCalendarScreen} />
      <Tab.Screen name="프로필" component={ProfileScreen} />
>>>>>>> hoon
    </Tab.Navigator>
  );
};

export default EmployerTabNavigator;
