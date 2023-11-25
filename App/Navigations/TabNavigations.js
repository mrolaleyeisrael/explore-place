import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Favorite from '../Screens/Favorite';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import { Ionicons } from '@expo/vector-icons';



export default function TabNavigations() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
      >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={24} color="black" />),
      }}/>
      <Tab.Screen name="Favorite" component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={24} color="black" />),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color="black" />),
        }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={24} color="black" />),
        }}
      />
    </Tab.Navigator>
  )
}