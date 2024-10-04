import { View, Text } from 'react-native'
import React from 'react'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { Link, Slot } from 'expo-router'

const AuthLayout = () => {
  return (
    <View>
        <ExpoStatusBar backgroundColor="yellow" style="dark" translucent={false} />
        <Link href={"/"}> <Text>Auth Layout</Text></Link>
        <Slot/>
       
    </View>
  )
}

export default AuthLayout