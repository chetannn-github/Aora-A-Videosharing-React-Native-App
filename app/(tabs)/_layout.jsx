import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Slot, Stack, Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'


const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    <Tabs.Screen
      name="home"
      options={{
        headerShown:false,
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }}
    />
    <Tabs.Screen
      name="bookmark"
      options={{
        headerShown:false,
        title: 'Settings',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark" color={color} />,
      }}
    />
    <Tabs.Screen
      name="create"
      options={{
        headerShown:false,
        title: 'Create',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-circle" color={color} />,
      }}
    /> 
    <Tabs.Screen
      name="profile"
      options={{
        headerShown:false,
        title: 'Profile',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle" color={color} />,
      }}
    />
    </Tabs>
  )
}

export default _layout