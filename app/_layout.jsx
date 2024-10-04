import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  return (
 
     <SafeAreaView className= "h-full bg-red-900 ">
     
    {/* stack navigation setup */}
    <Stack > 
      
      <Stack.Screen 
      name='index' 
      options={{headerStyle:{backgroundColor:"red" } , headerShown:false,headerBackButtonMenuEnabled:true,animation:'slide_from_right'}}>

      </Stack.Screen>
      <Stack.Screen
      name='(tabs)'
      options={{headerStyle:{backgroundColor:"red" } , headerShown:false,headerBackButtonMenuEnabled:true,animation:'slide_from_bottom'}}>

      </Stack.Screen>
      <Stack.Screen
      name='(auth)'
      options={{headerStyle:{backgroundColor:"red" } , headerShown:false,headerBackButtonMenuEnabled:true,animation:'slide_from_right'}}>
        
      </Stack.Screen> 
      
    </Stack>
    </SafeAreaView>
  
  )
}

export default RootLayout