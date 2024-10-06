import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Slot, Stack, Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'


const _layout = () => {
  return (
    
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#FFA001' ,
      tabBarStyle:{
        backgroundColor:"#161622",
        borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 54,
        
      }}}
    >
    <Tabs.Screen
      name="home"
      options={{
        title:"Home",
        headerShown:false,
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }}
    />
    <Tabs.Screen
      name="bookmark"
      options={{
        headerShown:false,
        title: 'Saved',
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
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
      }}
    />
    </Tabs>
  )
}

export default _layout