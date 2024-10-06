import { View, Text } from 'react-native'
import React from 'react'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { Link, Redirect, Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const AuthLayout = () => {
  let loggedInUser = useSelector((store) =>(store.user.loggedInUser));
  if(loggedInUser) {
    
    console.log(loggedInUser)
    return <Redirect href={"/(tabs)/home"}></Redirect>
  }


  return (
    <SafeAreaView className="h-full bg-red-500 w-fit">
        <ExpoStatusBar backgroundColor="#ff9c01" style="dark" translucent={false} />
        
        <Slot/>
       
    </SafeAreaView>
  )
}

export default AuthLayout