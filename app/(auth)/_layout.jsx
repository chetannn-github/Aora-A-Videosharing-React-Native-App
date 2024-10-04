import { View, Text } from 'react-native'
import React from 'react'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { Link, Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthLayout = () => {
  return (
    <SafeAreaView className="h-full bg-red-500 w-fit">
        <ExpoStatusBar backgroundColor="yellow" style="dark" translucent={false} />
        
        <Slot/>
       
    </SafeAreaView>
  )
}

export default AuthLayout