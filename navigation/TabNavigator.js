
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; //%%수정됨
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import PayScreen from '../screens/PayScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostDetailScreen from '../screens/PostDetailScreen'; //%%수정됨
import CreatePostScreen from '../screens/CreatePostScreen'; //%%수정됨


const Tab = createBottomTabNavigator();
const CommunityStack = createStackNavigator(); //%%수정됨

function CommunityStackScreen() { //%%수정됨
  return ( //%%수정됨
    <CommunityStack.Navigator> //%%수정됨
      <CommunityStack.Screen name="Community" component={CommunityScreen} options={{ headerShown: false }} /> //%%수정됨
      <CommunityStack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: '게시글 상세' }} /> //%%수정됨
      <CommunityStack.Screen name="CreatePost" component={CreatePostScreen} options={{ title: '게시글 작성' }} /> //%%수정됨
    </CommunityStack.Navigator> //%%수정됨
  ); //%%수정됨
} //%%수정됨

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '급여') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === '커뮤니티') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === '프로필') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#D1C4E9',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="급여" component={PayScreen} />
      <Tab.Screen name="커뮤니티" component={CommunityStackScreen} options={{ headerShown: false }} /> //%%수정됨
      <Tab.Screen name="프로필" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
