import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <SafeAreaView className= "h-full bg-red-300 ">
     <Text >RootLayout</Text>
      <Slot/> 
      
    </SafeAreaView>
  )
}

export default RootLayout